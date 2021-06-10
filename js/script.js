// Campo Minato
// nome repo: js-campominato
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// CREARE UNA VARIABILE CHE CONTERRA L'ARRAY CON I 16 NUMERI SCELTI RANDOM
// CICLO while X PUSHARE I 16 NUMERI RANDOM NELL'ARRAY
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti
// CONSOLE IL PUNTEGGIO
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// GENERO UN ARRAY
var max = 100;
var primoArray = generaArray(16);
console.log(primoArray);
// GENERO UN ARRAY VUOTO DA RIEMPIRE CON NUMERI INSERITI
var arrayPersona = [];
var lose = false;

var scelta = parseInt(prompt('Inserisci 0, 1 or 2'));
while (scelta < 0 || scelta > 2 || isNaN(scelta)) {
    alert('Becareful! have to be a number from 0 to 2');
    var scelta = parseInt(prompt('Inserisci 0, 1 or 2'));
}
//var max = parseInt(document.getElementById('range').value);
var max = 100;

switch (scelta) {
    case 0:
        massimo = 100;
        break;
    case 1:
        massimo = 80;
        break;
    case 2:
        massimo = 50;
        break;
}

var possibilita = max - 16;

//-------FUNCTIONS------//
//--Click
var submit = document.getElementById('submit');
submit.addEventListener("click", function () {
    //--SWITCH

    if (arrayPersona.length < massimo && !lose) {
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
                console.log('END GAME');
                risultato = arrayPersona.length;
                console.log(`Score: ${risultato}`);
                dontShowStuff('numero');

            };
        }
    }


});

var submit = document.getElementById('restart');
submit.addEventListener("click", function () {
    location.reload();
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
        var numeroRandom = random(1, max);
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
};

function dontShowStuff(id) {
    document.getElementById('numero').style.display = 'none';
}
