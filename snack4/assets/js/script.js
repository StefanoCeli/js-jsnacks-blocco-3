$(document).ready(function(){
    

    //creo l'array squadra e all'interno ci saranno gocatori con varie statistiche
    const arrSquadra = [
        {
            nome: "Giuseppe"
        },
        {
            nome: "Mario"
        },
        {
            nome: "Carlo"
        },
        {
            nome: "Ugo"
        },
        {
            nome: "Filippo"
        }
    ]
    console.log(arrSquadra);

    /* let codice = cicloCodice();
    let media = getRandomNumber(0, 50);
    let percentuale = getRandomNumber(0, 100);
 */
    

    for(let giocatore of arrSquadra){

        giocatore.codice = cicloCodice();
        giocatore.media = getRandomNumber(0, 50);
        giocatore.percentuale = getRandomNumber(0, 100);

        for(let chiave in giocatore){
            console.log(chiave + ': ' + giocatore[chiave]);
        }

        console.log('----------------');
    }

});
//funzione per ciclare le lettere random e i numeri random,per tre volte e li vado ad aggiungere a una variabile stringa
const cicloCodice = () =>{

    //creo un array di lettere
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result= '';

    while( result.length < 3){
        let str = arr[numR()];
        result += str;
    }

    result += getRandomNumber(100,999);

    return result.toUpperCase();
}

//funzione che va estrarre una lettera random dal mio array usando all'interno la funzione numeri random
let numR = () => getRandomNumber(0,25);
   


//funzione numeri random
let getRandomNumber = (min, max) => Math.floor(Math.random()*(max - min + 1)+min);