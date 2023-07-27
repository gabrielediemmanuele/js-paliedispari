/*Chiedo all'utente di scrivere pari o dispari*/
const userAnswer = prompt("Scegli tra pari o dispari?");
console.log(userAnswer);

//! Controllo se ha scritto pari o dispari..

/*Chiedo all'utente di scegliere un numero da 1 a 5 */
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);
//! controllo se ha scelto un numero da 1 a 5...

let player, computer;

const generatedNumber = getRandomNumber();
console.log(generatedNumber);

/*Faccio la somma tra i numeri*/
let totalNumber = userNumber + generatedNumber;
console.log(totalNumber);

const totalNumberWinner = isEven(totalNumber);
if (totalNumberWinner == true) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

// ? Se il risultato è pari e l'utente ha scritto 'pari'...
// ? Altrimenti se il risultato è dispari e l utente ha scritto dispari..

/* STABILIRE IL VINCITORE.... */
if (totalNumber % 2 == 0) {
  if (userAnswer == "pari") {
    console.log("hai vinto");
  } else {
    console.log("hai perso");
  }
} else {
  if (userAnswer == "dispari") {
    console.log("hai vinto");
  } else {
    console.log("hai perso");
  }
}

// generare un numero random per il pc da 1 a 5
function getRandomNumber() {
  computerNumber = Math.floor(Math.random() * 5 + 1);
  return computerNumber;
}

/*funzione che verifica se la somma è pari o dispari*/
function isEven(value) {
  let results = false;
  if (value % 2 == 0) {
    results = true;
  }
  return results;
}
// passare la "somma" (totalNumber) e restituire una parola o "pari" o
// "dispari" da confrontare con la parola scelta dall'utente
/* Tramite una funzione, creo un numero da 1 a 5 al pc */
