$(document).ready(function(){
    //creo un array di lettere
    var arrLettere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    console.log(arrLettere);
    //creo una variabile che avrà come valore la lunghezza dell'array
    var limit= arrLettere.length;
    //creo una variabile dove all'interno richiama la funzione e ritorna con un nuovo array
    var arrGenerato = myFunction( arrLettere,10,limit);
    console.log(arrGenerato);
});
//funzione per estrarre i dati dall'array
function myFunction(arr,start,end){
    var newArr= arr.slice(start,end);
    return newArr;
}