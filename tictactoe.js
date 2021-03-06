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

// Check for winning combo
function checkWinner(currPlayerSelections) {
    
    for(var i=0; i<winningCombinations.length; i++) {
        var matches = 0;
        for(var j=0; j<winningCombinations[i].length; j++) {        
            if(currPlayerSelections.includes(winningCombinations[i][j])) {
                matches++;
            } else {
                break;
            }
        }
        if(matches === winningCombinations[i].length) {
            return true;
        }
    }
    return false;
}

// Check for draw by seeing if players have selected 9 cells 
function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
} 

// Reset the board by clearing player selections and erase Xs and Os
function resetGame() {
    setMessage("");
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
      cells[i].classList.remove("clickedClass");
    }
}

// When cell is clicked
function setMessage(msg){
    document.getElementById("message").innerHTML = msg;
}

handleClick = function(event) {

  var cell = event.target;

  if(cell.innerHTML === "") {

  
    // Put X or O in the cell
    cell.innerHTML = currentPlayer;

    cell.classList.add("clickedClass");

        if(currentPlayer === "X" ) {
            playerSelections = playerXSelections;
            nextPlayer = "O";
        } else {
            playerSelections = playerOSelections;
            nextPlayer = "X";
        }

        playerSelections.push(parseInt(cell.id));

        if(checkWinner(playerSelections)) {
            alert("Player " + currentPlayer + " wins!")
            resetGame();
        } else if(checkDraw()) {
            alert("Draw! Game Over.");
            resetGame();
        } else { 
            // Swap players
            currentPlayer = nextPlayer;
            setMessage(currentPlayer + " is next");
        }

  } else {
      alert("This cell is taken already");
  }
}
 
// Gets an array of all the cells
var cells = document.querySelectorAll("td");

// Iterates through those cells to add an Event Listener
for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}



