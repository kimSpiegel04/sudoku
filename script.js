var board;
const choices = [1,2,3,4,5,6,7,8,9];
const cells = document.querySelectorAll('.cell');
const box_1 = document.querySelectorAll('.b-1');

//rules
for(var property in box_2) {
    if (box_2.hasOwnProperty(property)) {
        console.log(property);
    }
}

function startGame(){
    board = Array.from(Array(9).keys())
    for (var i=0; i<cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener('click', addNum, false);
    }
    // console.log(board);
    // addPuzzle();
}

// addPuzzle(){
    
// }

function addNum(){
    console.log(this)
}

startGame();