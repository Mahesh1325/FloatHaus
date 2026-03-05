const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const directoriesToSearch = [
    projectRoot,
    path.join(projectRoot, 'pages')
];

let filesProcessed = 0;
let occurrencesReplaced = 0;

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
            updateFile(fullPath);
        }
    });
}

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Use regex for case-insensitive exact matches where appropriate, 
    // but we need to cover specific cases manually to avoid breaking classes or URLs.

    // We are looking for text content >FLOAT it< or "FLOAT it" in titles
    let newContent = content.replace(/>FLOAT it</g, '>FloatHaus<');
    newContent = newContent.replace(/FLOAT it <span/g, 'FloatHaus <span');
    newContent = newContent.replace(/TITLE="FLOAT it"/gi, 'TITLE="FloatHaus"');
    newContent = newContent.replace(/content="FLOAT it/gi, 'content="FloatHaus');

    // Look for exact "FLOAT it" text nodes
    newContent = newContent.replace(/FLOAT it/g, 'FloatHaus');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${path.basename(filePath)}`);
        filesProcessed++;

        // Count rough occurrences
        const matches = content.match(/FLOAT it/g);
        if (matches) occurrencesReplaced += matches.length;
    }
}

console.log('Starting brand name update...');

directoriesToSearch.forEach(processDirectory);

console.log('\n--- Update Complete ---');
console.log(`Files modified: ${filesProcessed}`);
console.log(`Total occurrences replaced: ${occurrencesReplaced}`);
