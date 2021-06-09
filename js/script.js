// Campo Minato
// nome repo: js-campominato
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// CREARE UNA VARIABILE CHE CONTERRA L'ARRAY CON I 16 NUMERI SCELTI RANDOM
// CICLO while X PUSHARE I 16 NUMERI RANDOM NELL'ARRAY
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti
// CONSOLE IL PUNTEGGIO
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// GENERO UN ARRAY
var primoArray = generaArray(16);
console.log(primoArray);
// GENERO UN ARRAY VUOTO DA RIEMPIRE CON NUMERI INSERITI
var arrayPersona = [];
var lose = false;
//var max = parseInt(document.getElementById('range').value);
var max = parseInt(document.getElementById('zero').value);

if (max = parseInt(document.getElementById('zero').value)) {
    max = 100;
} else if (max = parseInt(document.getElementById('first').value)) {
    max = 80;
} else if (max = parseInt(document.getElementById('second').value)) {
    max = 60;
}
//-------FUNCTIONS------//
//--Click
var submit = document.getElementById('zero');
submit.addEventListener("click", function () {
    //--SWITCH

    if (arrayPersona.length < max - 16 && !lose) {
        var numero = parseInt(document.getElementById('numero').value);
        //var numero = parseInt(prompt('Inserisci numero'));
        if (isNaN(numero) || numero < 1 || numero > max) { // sbagliato range 1 80.....1 50
            console.log('Attenzione numero non compreso || Nan...riprovare')
        } else if (numero != NaN && numero >= 1 && numero <= max) {
            if (!primoArray.includes(numero)) {
                if (!arrayPersona.includes(numero)) {
                    arrayPersona.push(numero);
                    console.log(arrayPersona);
                    document.getElementById('numericasuali').innerHTML = arrayPersona;
                } else {
                    console.log('Attenzione Numero già inserito');
                }
            } else {
                var lose = true;
                console.log('lose');
            }
        }
    };
    risultato = arrayPersona.length;
    console.log(`Ecco il risultato ${risultato}`);
});

/**
 * Funzione che genera un numero casuale tra un numero min e max
 * @param  min parametro minimo
 * @param  max parametro massimo
 * @returns  numero casuale tra min & max
 */
//---RANDOM
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Genera un array con la lunghezza impostata dall'utente
 * @param  longArray lunghezza dell'array
 * @returns Array
 */
//---GENERARRAY
function generaArray(longArray) {
    var array = [];
    while (array.length < longArray) {
        var numeroRandom = random(1, 100);
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
};

