/**
 * Booking Flow Logic
 * Handles multi-step form validation, calendar placeholders, and transitions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    if (!form) return;

    let currentStep = 1;
    const totalSteps = 4;

    // Elements
    const serviceCards = document.querySelectorAll('.service-card');
    const inputService = document.getElementById('selected-service');
    const inputDate = document.getElementById('selected-date');
    const inputTime = document.getElementById('selected-time');
    const timeSlotsContainer = document.getElementById('time-slots-container');
    const errorDate = document.getElementById('error-date');
    const errorTime = document.getElementById('error-time');

    // 1. Service Selection Logic
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => {
                c.classList.remove('selected');
                c.setAttribute('aria-checked', 'false');
            });
            card.classList.add('selected');
            card.setAttribute('aria-checked', 'true');
            inputService.value = card.getAttribute('data-service');

            // Update Summary
            document.getElementById('summary-service').textContent = card.querySelector('h4').textContent;
            document.getElementById('summary-price').textContent = card.getAttribute('data-price');
        });

        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // 2. Calendar Mock Logic
    const initCalendar = () => {
        const calGrid = document.getElementById('calendar-days');
        const today = new Date();

        // Add 30 days of mock calendar data
        for (let i = 0; i < 35; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i - today.getDay()); // Align to start of week (Sunday)

            const cell = document.createElement('div');
            cell.className = 'calendar-day';
            cell.textContent = date.getDate();

            // Disable past dates and specific days
            if (date < new Date(new Date().setHours(0, 0, 0, 0))) {
                cell.classList.add('disabled');
            } else {
                cell.addEventListener('click', () => {
                    document.querySelectorAll('.calendar-day.selected').forEach(c => c.classList.remove('selected'));
                    cell.classList.add('selected');
                    errorDate.style.display = 'none';

                    const formatOpt = { month: 'long', day: 'numeric', year: 'numeric' };
                    inputDate.value = date.toLocaleDateString('en-US', formatOpt);
                    populateTimeSlots();
                });
            }
            calGrid.appendChild(cell);
        }
    };
    initCalendar();

    const populateTimeSlots = () => {
        timeSlotsContainer.innerHTML = '';
        inputTime.value = '';

        // Mock times
        const times = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

        // Randomly disable 2 times for realism
        const disabledIndices = [Math.floor(Math.random() * times.length), Math.floor(Math.random() * times.length)];

        times.forEach((t, i) => {
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            if (disabledIndices.includes(i) && i !== disabledIndices[0]) {
                // Keep at least one disabled differently or realistically
                slot.style.opacity = '0.3';
                slot.style.cursor = 'not-allowed';
                slot.textContent = t + ' (Booked)';
            } else {
                slot.textContent = t;
                slot.addEventListener('click', () => {
                    document.querySelectorAll('.time-slot.selected').forEach(s => s.classList.remove('selected'));
                    slot.classList.add('selected');
                    inputTime.value = t;
                    errorTime.style.display = 'none';

                    document.getElementById('summary-datetime').textContent = `${inputDate.value} at ${t}`;
                });
            }
            timeSlotsContainer.appendChild(slot);
        });
    };

    // 3. Step Navigation Logic
    const validateStep = (step) => {
        let isValid = true;
        if (step === 2) {
            if (!inputDate.value) {
                errorDate.style.display = 'block';
                isValid = false;
            }
            if (!inputTime.value) {
                errorTime.style.display = 'block';
                isValid = false;
            }
        }
        if (step === 3) {
            const inputs = document.querySelectorAll('#step-3 input[required]');
            inputs.forEach(input => {
                const errorDisplay = input.nextElementSibling;
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    if (errorDisplay) errorDisplay.style.display = 'block';
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                    if (errorDisplay) errorDisplay.style.display = 'none';
                }
            });
        }
        return isValid;
    };

    const goToStep = (step) => {
        // Ensure validation before moving forward
        if (step > currentStep && !validateStep(currentStep)) {
            return;
        }

        // Hide all
        document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
        // Show target
        document.getElementById(`step-${step}`).classList.add('active');

        // Update Indicators
        for (let i = 1; i <= totalSteps; i++) {
            const ind = document.getElementById(`indicator-${i}`);
            if (i < step) {
                ind.classList.add('completed');
                ind.classList.remove('active');
            } else if (i === step) {
                ind.classList.add('active');
                ind.classList.remove('completed');
            } else {
                ind.classList.remove('active', 'completed');
            }
        }

        currentStep = step;
    };

    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextStep = parseInt(e.target.getAttribute('data-next'), 10);
            goToStep(nextStep);
        });
    });

    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const prevStep = parseInt(e.target.getAttribute('data-prev'), 10);
            goToStep(prevStep);
        });
    });

    // 4. Form Submission Simulation
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateStep(3)) {
            goToStep(3);
            return;
        }

        const submitBtn = document.getElementById('btn-submit');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Save data to sessionStorage to display on confirmation
        sessionStorage.setItem('bookingDate', inputDate.value);
        sessionStorage.setItem('bookingTime', inputTime.value);

        // Simulate API call for payment processing
        setTimeout(() => {
            window.location.href = 'confirmation.html';
        }, 1500);
    });
});
