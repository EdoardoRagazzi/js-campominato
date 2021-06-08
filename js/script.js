// Campo Minato
// nome repo: js-campominato
// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
// Consigli del giorno:
//  :party_wizard: ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:


// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// CREARE UNA VARIABILE CHE CONTERRA L'ARRAY CON I 16 NUMERI SCELTI RANDOM
// CICLO while X PUSHARE I 16 NUMERI RANDOM NELL'ARRAY
var primoArray = generaArray(16);
console.log(primoArray);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
var arrayPersona = [];
var lose = false;
/**
 * Condizione While che mi permette di controllare la lunghezza prestabilita dell'array che andrò a creare con i numeri inseriti 
 * Se il numero inserito dall'utente è differente  dai numeri dell'array generato randomly, allora verrà inserito nell'arrayPersona
 * Se il numero è gia inserito richiederà nuovamente un altro numero
 * Visualizzaione fuori dal Ciclo While del Risultato
 */
while (arrayPersona.length < 2 && !lose) {
    var numero = parseInt(prompt('Inserisci numero'));
    if (!primoArray.includes(numero)) {
        console.log('Numero valido');
        if (!arrayPersona.includes(numero)) {
            arrayPersona.push(numero);
        } else {
            console.log('Attenzione Numero già inserito');
        }
    } else {
        var lose = true;
        console.log('lose');

    }
}
risultato = arrayPersona.length;
console.log(`Ecco il risultato ${risultato}`);







//-------FUNCTIONS------//
/**
 * Funzione che genera un numero casuale tra un numero min e max
 * @param  min parametro minimo
 * @param  max parametro massimo
 * @returns  numero casuale tra min & max
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Genera un array con la lunghezza impostata dall'utente
 * @param  longArray lunghezza dell'array
 * @returns Array
 */
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

