var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]


handleClick = function(event) {

  var cell = event.target;

  // Put X or O in the cell
  cell.innerHTML = currentPlayer;

  if(currentPlayer === "X" ) {
    playerSelections = playerXSelections;
console.log("playerXSelections: " + playerXSelections);
    nextPlayer = "O";
  } else {
    playerSelections = playerOSelections;
console.log("playerOSelections: " + playerOSelections);
    nextPlayer = "X";
  }

  playerSelections.push(parseInt(cell.id));
console.log("playerSelections: " + playerSelections);
  

  // Swap players
  currentPlayer = nextPlayer;
}
 
// Gets an array of all the cells
var cells = document.querySelectorAll("td");

// Iterates through those cells to add an Event Listener
for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

// Check for winning combo
function checkWinner {

}