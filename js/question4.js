/* En enkel valutaomvandlare /

/* Nuvarande rates som vi egentligen skulle läsa från en databas */
/* 100 SEK is 11.00 USD */
/* 100 SEK is 9.40 Euro */
/* 1 SEK is 0.094 EUR */
 

/* Skriv en funktion currencyConverter(amount, currency) */
// Växelkurser
    const sekToUSD = 0.11;
    const sekToEUR = 0.094; 


// Deklarerar funktionen.           "USD" "EUR"
function currencyConverter(amount, currency) {

    let result;

    if(currency === "EUR") {
        result = amount * sekToEUR;
        console.log(`${amount} SEK är ${result} €`);
    } 
    else if(currency === "USD") {
        result = amount * sekToUSD;
        console.log(`${amount} SEK är ${result} $`);
    } else {
        console.log("Currency not supported")
    }

}

// Anropas funktion, man kör den
currencyConverter(200000, "EUR");
currencyConverter(100000, "USD");