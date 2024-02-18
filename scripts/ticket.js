// Click Buy Tickets button to jump to Booking Section
function jumpToReference() {
    const reference = document.getElementById('booking-section');
    if (reference) {
        reference.scrollIntoView({ behavior: 'smooth' });
    }
}

// Events while Clicking on Seat Numbers
function seatNumberClicked(event) {
    const seatNumberElement = event.target;
    const seatNumber = event.target.innerText;

    if (!seatNumberElement.hasAttribute('disabled')) {
        // Disabling button after 1 click
        seatNumberElement.setAttribute('disabled', true);
        // Adding a class to set BG
        seatNumberElement.classList.add('button-p-bg');
    }
    // Why doesn't it work?
    else if (seatNumberElement.hasAttribute('disabled')) {
        // Enabling button after 1 click
        seatNumberElement.removeAttribute('disabled');
        // Removing the class to remove BG
        seatNumberElement.classList.remove('button-p-bg');
    }

    // Seat Left Counter in the Previous Section
    let seatLeft = getTextValueById('seat-left');
    if (seatNumberElement) {
        seatLeft = seatLeft - 1;
        setTextValueById('seat-left', seatLeft);
    }

    // Show Number of Booked Seats on the Right
    let bookedSeat = getTextValueById('booked-seats');
    if (seatNumberElement) {
        bookedSeat = bookedSeat + 1;
        setTextValueById('booked-seats', bookedSeat);
    }

    // Check if 4 seats are booked, then disable all remaining seats
    if (bookedSeat >= 4) {
        disableAllSeats();
    }

    // Adding Booked Seats and Information on the Right Side
    const ticketPrice = getTextValueById('fare-rate');
    setTableTextById('booked-seats-details', seatNumber, ticketPrice);

    // Setting Total Price
    let totalPrice = getTextValueById('total-price');
    totalPrice = totalPrice + ticketPrice;
    setTextValueById('total-price', totalPrice);
    setTextValueById('grand-total', totalPrice);

    // Enable Coupon Input Field
    const couponInput = document.getElementById('coupon');
    if (bookedSeat === 4) {
        couponInput.removeAttribute('disabled');
        // alert('You Got Coupon!');
    }
}

// Traversing the seat buttons
const buttons = document.querySelectorAll('.seat-button');

for (let button of buttons) {
    button.addEventListener('click', seatNumberClicked);
}

// Function to disable all remaining seats
function disableAllSeats() {
    const buttons = document.querySelectorAll('.seat-button');
    for (let button of buttons) {
        if (!button.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }
    };
}