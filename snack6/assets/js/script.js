$(document).ready(function(){

    //creo gli array
    const arrNum1 =[23,45,12,56]
    const arrNum2 =[11,63,78,90,12,32,54]

    //mostro a video gli array
    console.log('primo array: ' + arrNum1)
    console.log('secondo array: ' + arrNum2)
    console.log('-----------------------------------------')

    //richiamo la funzione e mostro di nuovo a video gli array
    sameLength(arrNum1,arrNum2);
    console.log('primo array: ' + arrNum1)
    console.log('secondo array: ' + arrNum2)

});

//funzione che va a misurare la lunghezza due due array e se uno è più corto pusherà fino a raggiungere la stessa lunghezza
const sameLength = (arr1,arr2) =>{
    while(arr1.length < arr2.length){
        let numR= getRandomNumber(1,100);
        arr1.push(numR);
    }
    while(arr2.length < arr1.length){
        let numR= getRandomNumber(1,100);
        arr2.push(numR);
    }
}

//funzione numeri random
const getRandomNumber = (min, max)=>Math.floor(Math.random()*(max - min + 1)+min);