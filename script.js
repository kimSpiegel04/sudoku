var board;
const cells = document.querySelectorAll('.cell');
const box_1 = document.querySelectorAll('.b-1');
console.log(box_1);

//rules
// function startBoard(){
//     if()
// }

function startGame(){
    board = Array.from(Array(81).keys())
    for (var i=0; i<cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener('click', addNum, false);
    }
    console.log(board);
    // addPuzzle();
}

// addPuzzle(){
    
// }

function addNum(){
    console.log(this)
}


startGame();