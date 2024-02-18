// Buy Tickets Button in Banner Section
function jumpToReference() {
    const reference = document.getElementById('booking-section');
    if (reference) {
        reference.scrollIntoView({ behavior: 'smooth' });
    }
}

// Clicking on Seat Numbers
function seatNumberClicked(event) {
    const seatNumberElement = event.target;
    const seatNumber = event.target.innerText;
    
    // Disabling button after 1 click
    seatNumberElement.setAttribute('disabled', 'disabled');
    // Adding a class to set BG
    seatNumberElement.classList.add('button-p-bg');
    let seatLeft = getTextValueById('total-seat');
    
    // Seat Left Count Above
    if (seatNumberElement) {
        seatLeft = seatLeft - 1;
        setTextValueById('total-seat', seatLeft);
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
            button.setAttribute('disabled', 'disabled');
        }
    };
}