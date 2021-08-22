// all Elements are 
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPriceCost = document.getElementById('total-price');
const discount = document.getElementById('discount-price');

// customize for memory, ssd ,delivery with charge 
function withCost(costId) {
    if (costId == '8gb') {
        memoryCost.innerText = 0;
    }
    else if (costId == '256gb ssd') {
        storageCost.innerText = 0;
    }
    else if (costId == 'delivery') {
        deliveryCost.innerText = 0;
    }
    else if (costId == '16gb') {
        memoryCost.innerText = 180;
    }
    else if (costId == '512gb ssd') {
        storageCost.innerText = 100;
    }
    else if (costId == '1tb ssd') {
        storageCost.innerText = 180;
    }
    else if (costId == 'charge') {
        deliveryCost.innerText = 20;
    }
    totalPrice();
}

// total price 
function totalPrice() {
    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCost = parseInt(deliveryCost.innerText);
    const total = totalMemoryCost + totalStorageCost + totalDeliveryCost;

    totalPriceCost.innerText = 1299 + total;
    discount.innerText = 1299 + total;
}

// apply pomo code 
document.getElementById('apply-button').addEventListener('click', function () {
    const applyInput = document.getElementById('apply-input');
    const applyInputText = applyInput.value;
    const totalCostNum = parseFloat(totalPriceCost.innerText);
    if (applyInputText == 'stevekaku') {
        discount.innerText = totalCostNum - (totalCostNum * 20 / 100);

        applyInput.value = '';
    }
})
