$(document).ready(function(){
    var arrNum = [1,2,3,4,5];
    var arrLettere = ['a','b','c','d','e','f','g'];
    var arrFuso = [];

    fondiArr();
    
    function fondiArr(){
        if(arrNum.length < arrLettere.length){
            var i = 0;
            while(i < arrNum.length){
                arrFuso.push(arrNum[i]);
                arrFuso.push(arrLettere[i]);
                i++
            }
        }else if(arrLettere.length < arrNum.length){
            var i = 0;
            while(i < arrLettere.length){
                arrFuso.push(arrNum[i]);
                arrFuso.push(arrLettere[i]);
                i++
            }
        }
    }
    console.log(arrFuso);
});