$(document).ready(function(){
    //creo un array di lettere
    var arrLettere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //creo l'array squadra e all'interno ci saranno gocatori con varie statistiche
    var arrSquadra = [
        {
            codice: cicloCodice(3,arrLettere),
            media : getRandomNumber(1,50),
            percentuale : getRandomNumber(1,100)
        },
        {
            codice :cicloCodice(3,arrLettere),
            media : getRandomNumber(1,50),
            percentuale : getRandomNumber(1,100)
        },
        {
            codice : cicloCodice(3,arrLettere),
            media : getRandomNumber(1,50),
            percentuale : getRandomNumber(1,100)
        },
        {
            codice : cicloCodice(3,arrLettere),
            media : getRandomNumber(1,50),
            percentuale : getRandomNumber(1,100)
        },
        {
            codice :cicloCodice(3,arrLettere),
            media : getRandomNumber(1,50),
            percentuale : getRandomNumber(1,100)
        }
    ]
    console.log(arrSquadra);

    for(var giocatore of arrSquadra){
        for(var chiave in giocatore){
            console.log(chiave + ': ' + giocatore[chiave]);
        }
        console.log('----------------');
    }

});
//funzione per ciclare le lettere random e i numeri random,per tre volte e li vado ad aggiungere a una variabile stringa
function cicloCodice(num,arr){

    var i = 0;
    var x = 0;
    var result= '';

    while( i < num){
        var str = lettereRandom(arr);
        result += str;
        i++;
    }
    while( x < num){
        var numR = getRandomNumber(1,9);
        result += numR;
        x++;
    }

    return result.toUpperCase();
}
//funzione che va estrarre una lettera random dal mio array usando all'interno la funzione numeri random
function lettereRandom(arr){
    var numR = getRandomNumber(1,25);
    return arr[numR];
}

//funzione numeri random
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+min);
};