const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

let bankAccountBalance = 303.91;
let totalSpend = 0;

function calculateTax(dollarValue){
    return dollarValue * TAX_RATE;
}

function formatPrice(amount){
    return "$" + amount.toFixed(2)
}

while(totalSpend < bankAccountBalance){
    totalSpend += PHONE_PRICE;

    if(totalSpend < SPENDING_THRESHOLD){
        totalSpend += ACCESSORY_PRICE;
    }
}

totalSpend += calculateTax(totalSpend);

console.log("Your purchase: " + formatPrice(totalSpend));

