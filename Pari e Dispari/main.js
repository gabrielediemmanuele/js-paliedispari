/*Chiedo all'utente di scrivere pari o dispari*/
const userAnswer = prompt("Scegli tra pari o dispari?");
console.log(userAnswer);

//! Controllo se ha scritto pari o dispari..

/*Chiedo all'utente di scegliere un numero da 1 a 5 */
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);
//! controllo se ha scelto un numero da 1 a 5...

let player, computer;

/* Tramite una funzione, creo un numero da 1 a 5 al pc */
function getRandomNumber() {
  computerNumber = Math.floor(Math.random() * 5 + 1);
  return computerNumber;
}
const generatedNumber = getRandomNumber();
console.log(generatedNumber);

/*Faccio la somma tra i numeri*/
let totalNumber = userNumber + generatedNumber;
console.log(totalNumber);

let results;
/*stabilire se la somma dei due numeri è pari o dispari*/
function pariDispariWinner() {
  if (totalNumber % 2 == 0) {
    results = totalNumber;
    console.log("pari");
  } else {
    results = totalNumber;
    console.log("dispari");
  }
  return results;
}

const totalNumberWinner = pariDispariWinner();
console.log(results);

if (results % 2 == 0 && e pari) {
    alert('hai vinto');
} else if (results % 2 !== 0 e dispari){
    alert('hai vinto');
} else {
    alert ('hai perso');
}
