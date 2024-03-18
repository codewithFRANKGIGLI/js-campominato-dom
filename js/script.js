// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// creo l'evento in ascolto del click per rimuovere d-none da grid:
const mainGrid = document.querySelector('#grid');
const playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', createNewGame);

// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// per 100 volte creare un quadratino e ogni quadratino
// lo aggiungo a grid
function createNewGame() {
    mainGrid.innerHTML = '';
    const level = document.querySelector('#level').value;
    let numberOfSquares;
    let numberOfCellsPerRow;
        if (level === 'easy') {
            numberOfSquares = 100;
            numberOfCellsPerRow = 10;
        } else if(level === 'normal') {
            numberOfSquares = 81;
            numberOfCellsPerRow = 9;
        } else if(level === 'hard') {
            numberOfSquares = 49;
            numberOfCellsPerRow = 7;
        }
        console.log(numberOfSquares, numberOfCellsPerRow);
    for(let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber, numberOfCellsPerRow);    // chiamo la funzione
        square.addEventListener('click', function() {
            this.classList.add('my-event-bg');
            setTimeout(function() {
                alert(`Hai cliccato:  ${thisNumber}`);
            }, 0);
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
