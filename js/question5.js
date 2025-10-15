// Pris per vara
let priceOfShirt = 25;
let priceOfPants = 40;
let priceOfShoes = 60;

// Funktion som betalar hela summan. Returnera totalbeloppet

function calculateTotal(shirtQuantity, pantsQuantity, shoesQuantity) {
    let total = (shirtQuantity * priceOfShirt) + (pantsQuantity * priceOfPants) + (shoesQuantity * priceOfShoes);
    return total; 
}


// Exampel
const totalPrice = calculateTotal(2, 5, 3);
console.log(totalPrice);