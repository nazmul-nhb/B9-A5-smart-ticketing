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

function getInputStringById(id) {
    const inputText = document.getElementById(id).value;
    return inputText;
}