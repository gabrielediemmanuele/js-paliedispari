// Chiedo all'utente di inserire una parola..

const userWord = prompt("Inserisci una parola");
console.log(userWord);

// creo la base per la funzione
const userReverse = wordReverse(userWord);

//condition
if (userReverse === userWord) {
  alert("la parola è palindroma");
} else {
  alert("la parola non è palindroma");
}

// funzione
function wordReverse(word) {
  let reverse = "";
  for (let i = word.lenght - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

//? ---------------------
