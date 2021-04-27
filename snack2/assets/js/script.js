$(document).ready(function(){
var zucchine = [
    {
        varietà : 'zucchino nero di Milano',
        peso : 1.5,
        lunghezza : 30
    },
    {
        varietà : 'zucchino romanesco',
        peso : 1.2,
        lunghezza : 23
    },
    {
        varietà : 'zucchino ortolano di Faenza',
        peso : 1,
        lunghezza : 15
    },
    {
        varietà : 'zucchina lunga fiorentina',
        peso : 0.8,
        lunghezza : 14
    },
    {
        varietà : 'zucchino siciliano',
        peso : 1.3,
        lunghezza : 27
    },
    {
        varietà : 'zucchina Striata di Napoli',
        peso : 1.4,
        lunghezza : 17
    },
    {
        varietà : 'zucchina bianca triestina',
        peso : 1.8,
        lunghezza : 28
    },
    {
        varietà : 'zucchina rigata Pugliese',
        peso : 1.2,
        lunghezza : 13
    },
    {
        varietà : 'zucchino tondo di piacenza',
        peso : 1.7,
        lunghezza : 12
    },
    {
        varietà : 'zucchino tondo di Nizza',
        peso : 2,
        lunghezza : 13 
    }
]
var zucchinePiccole = [];
var zucchineLunghe = [];
var pesoPiccole= 0;
var pesoLunghe= 0;

for(var zucchina of zucchine){
    if(zucchina['lunghezza'] <= 15 ){
        zucchinePiccole.push(zucchina);
        pesoPiccole += zucchina['peso']
    }else{
        zucchineLunghe.push(zucchina);
        pesoLunghe += zucchina['peso']
    }
}
console.log('zucchinePiccole:');
console.log(zucchinePiccole);
console.log('il peso totale delle zucchine corte è: ' + pesoPiccole);
console.log('zucchineLunghe:');
console.log(zucchineLunghe);
console.log('il peso totale delle zucchine corte è: ' + pesoLunghe);

});