function getTextValueById(id) {
    const element = document.getElementById(id);
    const value = parseInt(element.innerText);
    return value;
}

function setTextValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function setTableTextById(id, seatNumber, price) {
    const tableBody = document.getElementById(id);
    const tr = document.createElement('tr');
    tr.classList.add('border-0');
    tableBody.appendChild(tr);

    tr.innerHTML = `<td>${seatNumber}</td>
                    <td>Economy</td>
                    <td class="text-right" id="cart-price">${price}</td>`;
}

function setDiscountAmountById(id, discount) {
    const discountAmount = document.getElementById(id);
    discountAmount.innerHTML = `<h4 class="">Discount</h4>
                                <h4 class="">- BDT <span id="total-price">${discount}</span></h4>`
}


function getInputStringById(id) {
    const inputText = document.getElementById(id).value;
    return inputText;
}


// Getting Event Values by ID
/* function getInputTargetValueById(id) {
    const inputTarget = document.getElementById(id);
    inputTarget.addEventListener('keyup', function (event) {
        const targetValue = event.target.value;
        return targetValue;
    }
    )
} */