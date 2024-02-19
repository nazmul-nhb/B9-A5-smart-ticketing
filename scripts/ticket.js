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

    // Calculating Total Price
    let totalPrice = getTextValueById('total-price');
    totalPrice = totalPrice + ticketPrice;
    setTextValueById('total-price', totalPrice);
    setTextValueById('grand-total', totalPrice);

    // Enable Coupon Input Field
    const couponInput = document.getElementById('coupon');
    if (bookedSeat === 4) {
        couponInput.removeAttribute('disabled');
    }
}

// Traversing the seat buttons
const buttons = document.querySelectorAll('.seat-button');

for (let button of buttons) {
    button.addEventListener('click', seatNumberClicked);
}

// Function to disable all remaining seats
function disableAllSeats() {
    for (let button of buttons) {
        if (!button.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }
    }
}

// Enabling the Coupon Input Field
const couponField = document.getElementById('coupon');
couponField.addEventListener('keyup', function (event) {
    const couponText = event.target.value;
    if (couponText.length > 0) {
        couponApply.removeAttribute('disabled');
    }
    else if (couponText.length <= 0) {
        couponApply.setAttribute('disabled', true);
    }
});

// Calculating Grand Total and Showing Alerts
function grandTotalCoupon() {
    let totalPrice = getTextValueById('total-price');
    let grandTotal = getTextValueById('grand-total');
    const couponText = getInputStringById('coupon');
    const couponDiv = document.getElementById('coupon-div');

    if (couponText === 'NEW15') {
        grandTotal = totalPrice - (totalPrice * 15) / 100;
        // Setting the Value in Grand Total row
        setTextValueById('grand-total', grandTotal);
        // Setting discount amount below the Total Price
        const discount = totalPrice - grandTotal;
        setDiscountAmountById('discount-amount', discount);

        alert('Congratulations! You got 15% Discount')
        couponDiv.classList.add('hidden');
    }
    else if (couponText === 'Couple 20') {
        grandTotal = totalPrice - (totalPrice * 20) / 100;
        setTextValueById('grand-total', grandTotal);

        // Setting discount amount below the Total Price
        const discount = totalPrice - grandTotal;
        setDiscountAmountById('discount-amount', discount);

        alert('Congratulations! You got 20% Discount')
        couponDiv.classList.add('hidden');
    }
    else if (couponText !== 'NEW15') {
        alert('Wrong Coupon!')
        couponField.value = '';
        couponApply.setAttribute('disabled', true);
    }
    else if (couponText !== 'Couple 20') {
        alert('Wrong Coupon!')
        couponField.value = '';
        couponApply.setAttribute('disabled', true);
    }
}

// Coupon Apply button
const couponApply = document.getElementById('coupon-apply');
couponApply.addEventListener('click', grandTotalCoupon);


// Enabling Next button
const phoneNumber = document.getElementById('phone');
phoneNumber.addEventListener('keyup', function (event) {
    const phoneValue = event.target.value;
    if (phoneValue.length > 0) {
        nextButton.removeAttribute('disabled');
    }
    else {
        nextButton.setAttribute('disabled', true);
    }
});

// Function for Next Button
function successNext() {
    const phoneField = document.getElementById('phone');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    phoneField.value = '';
    nameField.value = '';
    emailField.value = '';
    nextButton.setAttribute('disabled', true);

    // Resetting Booking Extra
    for (let button of buttons) {
        if (button.classList.contains('button-p-bg')) {
            button.classList.remove('button-p-bg');
        }
    }
/* 
    let totalPrice = getTextValueById('total-price');
    let grandTotal = getTextValueById('grand-total');
    totalPrice = 0;
    grandTotal = 0;

    let bookedSeat = getTextValueById('booked-seats');
    bookedSeat = 0; */
}


// Next Button
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', successNext);