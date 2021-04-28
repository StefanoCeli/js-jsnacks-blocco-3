$(document).ready(function(){
    //creo un array di lettere
    const arrLettere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    console.log(arrLettere);
    //creo una variabile che avrà come valore la lunghezza minima e massima dell'array da generare
    let min= 10;
    let max= 20;
    //creo una variabile dove all'interno richiama la funzione e ritorna con un nuovo array
    const arrGenerato = myFunction( arrLettere,min,max);
    console.log(arrGenerato);
    console.log(arrLettere);
});
//funzione per estrarre i dati dall'array
let myFunction = (arr,start,end) => arr.slice(start,end)
