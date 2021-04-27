$(document).ready(function(){
var zucchine = [
    {
        varietà : 'zucchino nero di Milano',
        peso : 1.5,
        lunghezza : "30cm"
    },
    {
        varietà : 'zucchino romanesco',
        peso : 1.2,
        lunghezza : "23cm"
    },
    {
        varietà : 'zucchino ortolano di Faenza',
        peso : 1,
        lunghezza : "18cm"
    },
    {
        varietà : 'zucchina lunga fiorentina',
        peso : 0.8,
        lunghezza : "22cm"
    },
    {
        varietà : 'zucchino siciliano',
        peso : 1.3,
        lunghezza : "27cm"
    },
    {
        varietà : 'zucchina Striata di Napoli',
        peso : 1.4,
        lunghezza : "17cm"
    },
    {
        varietà : 'zucchina bianca triestina',
        peso : 1.8,
        lunghezza : "28cm"
    },
    {
        varietà : 'zucchina rigata Pugliese',
        peso : 1.2,
        lunghezza : "13cm"
    },
    {
        varietà : 'zucchino tondo di piacenza',
        peso : 1.7,
        lunghezza : "12cm"
    },
    {
        varietà : 'zucchino tondo di Nizza',
        peso : 2,
        lunghezza : "21cm"
    }
]

var pesoTotale = 0;

for(var zucchina of zucchine){
    console.log( zucchina['peso']);
    pesoTotale += zucchina['peso'];
}

console.log('il peso totale delle zucchine è: ' + pesoTotale.toFixed(2))
});


//funzione per scrivere un output in un target
function printOutput(str,target){
$(target).text(str);
};

