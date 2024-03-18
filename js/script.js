// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ e /img con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


////////////////////// COPIATO DA REPO PRECEDENTE //////////////////////
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// creo l'evento in ascolto del click per rimuovere d-none da grid:
const mainGrid = document.querySelector('#grid');
const playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', createNewGame);

// Creo un array vuoto con 16 numeri random che rappresentano le bombe:

// Scrivere una funzione che restituisce 
// un array di 16 numeri random
// compresi tra 1 e 100
// L'array non dovrà contenere duplicati
// const bombsArray = generateRandomArray(16, 1, 100);
// function generateRandomArray(arrayLength, numMin, numMax) {
//     const randomNumbersArray = [];
//     while(randomNumbersArray.length < arrayLength) {
//         const randNumber = getRndInteger(numMin, numMax);
//         if(!randomNumbersArray.includes(randNumber)) {
//             randomNumbersArray.push(randNumber);
//         }
//     }
//     return randomNumbersArray;
// }
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(bombsArray);


// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// per 100 volte creare un quadratino e ogni quadratino
// lo aggiungo a grid
function createNewGame() {
    mainGrid.innerHTML = '';
    const level = document.querySelector('#level').value;
    let numberOfSquares;
    let numberOfCellsPerRow;
    let counterClick = 0;
        if(level === 'easy') {
            numberOfSquares = 100;
            numberOfCellsPerRow = 10;   
        } else if(level === 'normal') {
            numberOfSquares = 81;
            numberOfCellsPerRow = 9;
        } else if(level === 'hard') {
            numberOfSquares = 49;
            numberOfCellsPerRow = 7;    
        }
        const bombsArray = generateRandomArray(16, 1, numberOfSquares);
        console.log(bombsArray);
        // console.log(numberOfSquares, numberOfCellsPerRow);
    for(let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber, numberOfCellsPerRow);    // chiamo la funzione
        square.addEventListener('click', function() {   
            if(bombsArray.includes(parseInt(this.innerHTML))) {
                alert('Hai perso! Il tuo punteggio è: '+ counterClick +'. Una bomba è in questa cella, Ricomincia!');
                this.classList.add('my-gameover-bg');
                mainGrid.classList.add('d-none');
                window.location.reload();   // ricarico pagina se ho perso
            } else {
                this.classList.add('my-event-bg');
                counterClick++;
            }
            // console.log(this.innerHTML);
            console.log(counterClick);
            console.log(numberOfSquares);
            if(counterClick === numberOfSquares - 16) {
                alert('Hai Vinto!')
            }
        });
        mainGrid.append(square);
    }
}

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    // number -> numero che rappresenta un numero
    // return: elemento del dom che rappresenta un quadrato

function generateSquare(number, cellsPerRow) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = number; 
    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;
    
    return newSquare;
}


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function generateRandomArray(arrayLength, numMin, numMax) {
    const randomNumbersArray = [];
    while(randomNumbersArray.length < arrayLength) {
        const randNumber = getRndInteger(numMin, numMax);
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    return randomNumbersArray;
}