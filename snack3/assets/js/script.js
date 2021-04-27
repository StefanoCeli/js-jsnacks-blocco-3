$(document).ready(function(){
    var arrNum = [1,2,3,4,5];
    var arrLettere = ['a','b','c'];
    var arrFuso = [];

    fondiArr(arrNum,arrLettere,arrFuso);
    
    function fondiArr(arr1,arr2,arr3){
        if(arr1.length < arr2.length){
            var i = 0;
            while(i < arr1.length){
                arr3.push(arr1[i]);
                arr3.push(arr2[i]);
                i++
            }
        }else{
            var i = 0;
            while(i < arr2.length){
                arr3.push(arr1[i]);
                arr3.push(arr2[i]);
                i++
            }
        }
    }
    console.log(arrFuso);
});