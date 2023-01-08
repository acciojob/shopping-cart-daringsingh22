//your code here
const item = document.querySelector('#item');
const price = document.querySelector('#price');
const addButton = document.querySelector('#add');
const table = document.querySelector('#table');
const cost = document.querySelector('#cost');

let totalPrice = 0;
cost.innerText = Total cost: ${totalPrice}

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const itemVal = item.value;
    const priceVal = price.value;

    totalPrice += Number(priceVal);

    const row = table.insertRow();
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);

    cell0.innerText = itemVal;
    cell1.innerText = priceVal;

    cost.innerText = Total cost: ${totalPrice}
    console.log(itemVal, priceVal);

});