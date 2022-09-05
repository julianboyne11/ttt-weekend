/*--------------------- Constants ----------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



/*------------------ Variables (state) -----------------*/
let board, turn, winner



/*------------ Cached Element References ---------------*/
const squareEls = document.querySelectorAll(".square")
const messageEl = document.querySelector("#message")
const form = document.querySelector("form")
const resetBtn = document.querySelector("#reset-button")




/*------------------ Event Listeners 
-------------------*/
squareEls.forEach(function(square){ square.addEventListener("click", handleClick)})
form.addEventListener("click", resetGame)



/*-------------------- Functions -----------------------*/


init()



//// Step 1 - Define the required variables used to track the state of the game

  // 1a) Use a variable named `board` to represent the state of the squares on
  //    the board.

  // 1b) Use a variable named `turn` to track whose turn it is.

  // 1c) Use a variable named `winner` to represent if anyone has won yet, or 
  //    if a tie has occurred.

  //// Step 2 - Store cached element references

  // 2a) In a constant called `squareEls`, store the nine elements 
  //    representing the squares on the page.

  // 2b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.


//// Step 3 - Upon loading, the game state should be initialized, and a function 
//          should be called to render this game state
function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = -1
  winner = null
  render()
  resetBtn.setAttribute("hidden", true)

}

  // 3a) Create a function called `init`.

  // 3b) Call this `init` function when the app loads.

  // 3c) Set the `board` variable to an array containing nine `null`s to 
  //    represent empty squares.

  // 3d) Set the `turn` to `1` - which will represent player X.

  // 3e) Set the `winner` to `null`.

  // 3f) Call a function called `render` at the end of the `init` function.

// Step 4 - The state of the game should be rendered to the use
// 4a) Create a function called `render`.
function render() {
  
    // 4b) Loop over `board` and for each element:
    //     - Use the current index of the iteration to access the corresponding 
    //       square in the `squareEls` array.
    board.forEach((value, idx) => {
      
      squareEls[idx].textContent = value 
      
      //     - Style that square however you wish, dependent on the value  
      //       contained in the current cell being iterated over (`-1`, `1`, or
      //       `null`). 
      if (board[idx] === 1) {
        
        squareEls[idx].textContent = "X"
        
      } else if (board[idx] === -1) {
        
        squareEls[idx].textContent = "O"
      } else { 
        squareEls[idx].textContent = ""
      }
      resetBtn.removeAttribute("hidden")
    })
    
    // 4c) Render a message based on the current game state:
    //     - If winner has a value of `null` (meaning the game is still in
    //       progress), render whose turn it is.
    if(winner === null) {
      messageEl.textContent = `It's ${turn === 1 ? "Player 2's turn!" : "Player 1's turn!"}`
      
    } else {
      messageEl.textContent = `${winner === "T" ? "It's a tie!" : "Congrats! " + turn + " won!"}`
    }

  }

  
  






//// Step 5 - Define the required constants

  // 5a) In a constant called `winningCombos` define the eight possible winning
  
  //     combinations as an array of arrays.

// Step 6 - Handle a player clicking a square with a `handleClick` function
// 6a) Create a function called `handleClick`. It will have an `evt`
//     parameter.
  function handleClick(evt) {
    
    
    //// 6b) Attach an event listener to the game board (you can do this to each
    //     one of the existing `squareEls` OR add a new cached element reference
    //     that will allow you to take advantage of event bubbling). On the
    //     `'click'` event, it should call the `handleClick` function
    //     you created in 6a.
    // 6c) Obtain the index of the square that was clicked by "extracting" the 
    //     index from an `id` assigned to the element in the HTML. Assign this  
    //     to a constant called `sqIdx`.
  

      
      const sqIdx = parseInt(evt.target.id[2])
        // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
        //     because that square is already taken. Also, if `winner` is not `null`
        if (winner !== null){
          //     immediately `return` because the game is over.
          return
        } else if (board[sqIdx] !== null) {
          return
        } else {
          // 6e) Update the `board` array at the `sqIdx` with the current value of
          //     `turn`.
          board.splice(sqIdx, 1, turn)
        }
      
      // 6f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
      //     `-1`, and vice-versa).
      turn = turn * -1
      
      // 6g) Set the `winner` variable if there's a winner by calling a new 
      //     function: `getWinner`.
    
      getWinner()
    
      // 6h) All the state has been updated so we need to render our updated state 
      //     to the user by calling the `render` function we wrote earlier.
      render()
      
    }
    
  








// Step 7 - Build the `getWinner` function

  // 7a) Create a function called `getWinner`
function getWinner() {
  winningCombos.forEach(combo => {
  	if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3){
			return winner = turn
		}else if(board.includes(3)){
			winner = turn
		} else if(!board.includes(null)) {
      winner = "T"
    }
    
    // 7b1)Loop through each of the winning combination arrays defined in the 
    //     `winningCombos` array. Total up the three board positions using the 
    //     three indexes in the current combo. Convert the total to an absolute 
    //     value (convert any negative total to positive). If the total equals 3, 
    //     we have a winner! Set the `winner` variable to the board's value at
    //     the index specified by the first index of that winning combination's
    //     array by returning that value.
	})

  }


  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */


  // 7b2)For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

// 7c) If there is no winner, check to see if there is a tie. Set the  
  //     `winner` variable to `'T'` if there are no more nulls in the board  
  //     array byreturning the string `'T'`.

  // 7d) If there is no winner and there isn’t a tie, return `null`.

//// Step 8 - Create Reset functionality
function resetGame() {
  init()
  resetBtn.hidden = true
}

  // 8a) Add a reset button to the HTML document.

  // 8b) Store the new reset button element in a constant named `resetBtnEl`.

  // 8c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in 3
