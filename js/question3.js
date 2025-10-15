/* Gissningslek! Skriv in ett tal mellan 1 och 100. Finns en "secret"-tal som man ska komma nära.

=> om det är samma som det hemliga talet => Skriv ut "Grattis!"
=> om talet mindre än 10 ifrån talet => Skriv ut "Close but no cigar!"
=> annars => Skriv ut "Not even close" */
debugger;
const input = 36;
const secret = 33;

// Hur långt ifrån secret man är. Men vi får även ett negativt tal!
let diff = secret - input;

// Om diff är negativ
if(diff < 0) {
    // Diff blir positiv
    diff = diff * -1;
} 

if(secret === input) {
    console.log("Grattis!!!!");
} 
  // Differens måste vara större än 0 och mindre än 10
else if( diff <= 10  && diff >= 0) {
    console.log("Close but no cigar!")
} else {
    console.log("Not even close");
}


