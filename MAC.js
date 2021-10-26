function memory(first, price1) {
    const memoryPrice = document.getElementById(first);
    const storagePrice = document.getElementById(first);
    const deliveryCost = document.getElementById(first);
    if (price1 == 0) {
        memoryPrice.innerText = price1;

    }
    else if (price1 == 180) {
        memoryPrice.innerText = price1;
    }
    else if (price1 == 0) {
        storagePrice.innerText = price1;
    }
    else if (price1 == 100) {
        storagePrice.innerText = price1;
    }
    else if (price1 == 180) {
        storagePrice.innerText = price1;
    }
    else if (price1 == 0) {
        deliveryCost.innerText = price1;
    }
    else if (price1 == 20) {
        deliveryCost.innerText = price1;
    }
    totalCost();
}

document.getElementById('mac-1').addEventListener('click', function () {
    memory('mac-9', 0);
})
document.getElementById('mac-2').addEventListener('click', function () {
    memory('mac-9', 180);
})
document.getElementById('mac-3').addEventListener('click', function () {
    memory('mac-10', 0);
})
document.getElementById('mac-4').addEventListener('click', function () {
    memory('mac-10', 100);
})
document.getElementById('mac-5').addEventListener('click', function () {
    memory('mac-10', 180);
})
document.getElementById('mac-6').addEventListener('click', function () {
    memory('mac-11', 0);
})
document.getElementById('mac-7').addEventListener('click', function () {
    memory('mac-11', 20);
})

function totalCost() {
    const bestPrice = document.getElementById('mac-8');
    const getValue = bestPrice.innerText;
    const firstConvert = parseInt(getValue);
    const extraMemoryCost = document.getElementById('mac-9');
    const getSecondVAlue = extraMemoryCost.innerText;
    const secondConvert = parseInt(getSecondVAlue);
    const extraStorageCost = document.getElementById('mac-10');
    const getThirdValue = extraStorageCost.innerText;
    const thirdConvert = parseInt(getThirdValue);
    const deliveryCharge = document.getElementById('mac-11');
    const deliveryValue = deliveryCharge.innerText;
    const deliveryConvert = parseInt(deliveryValue);
    const totalPrice = document.getElementById('mac-12');
    totalPrice.innerText = firstConvert + secondConvert + thirdConvert + deliveryConvert;
    const lastTotal = document.getElementById('lastTotalId');
    lastTotal.innerText = firstConvert + secondConvert + thirdConvert + deliveryConvert;
}

function taxTotal(lastInputId, taxInput) {
    const promoInput = document.getElementById(lastInputId);
    if (promoInput.value == 'stevekaku') {

        const totalPriceId = document.getElementById('mac-12');
        const totalPriceText = totalPriceId.innerText;
        const totalPriceConvert = parseInt(totalPriceText);
        const totalPriceTax = totalPriceConvert / taxInput;
        totalPriceId.innerText = totalPriceConvert + parseInt(totalPriceTax);
        const taxLastTotalId = document.getElementById('lastTotalId');
        taxLastTotalId.innerText = totalPriceConvert + parseInt(totalPriceTax);
        promoInput.value = '';
    }
    else {
        alert('Enter correct promo code');
    }
}

document.getElementById('promo2').addEventListener('click', function () {
    taxTotal('promo1', 20);
})