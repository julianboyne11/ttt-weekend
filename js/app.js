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



function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = -1
  winner = null
  render()
  resetBtn.setAttribute("hidden", true)

}


function render() {
  
  board.forEach((value, idx) => {
      
    squareEls[idx].textContent = value 
      
    
    if (board[idx] === 1) {
        
      squareEls[idx].textContent = "X"
        
    } else if (board[idx] === -1) {
        
      squareEls[idx].textContent = "O"
    } else { 
        squareEls[idx].textContent = ""
    }
      resetBtn.removeAttribute("hidden")
    })
    
    if(winner === null) {
      messageEl.textContent = `It's ${turn === 1 ? "Player 2's turn!" : "Player 1's turn!"}`
      
    } else {
      messageEl.textContent = `${winner === "T" ? "It's a tie!" : "Congrats! " + turn + " won!"}`
  

  }
}



  function handleClick(evt) {
    

      const sqIdx = parseInt(evt.target.id[2])
    
        if (winner !== null){
          
          return
          
        } else if (board[sqIdx] !== null) {

          return

        } else {
    
          board.splice(sqIdx, 1, turn)
        }
      
      turn = turn * -1
      
      getWinner()
    
      render()
      
    }
    
  



function getWinner() {
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3){
      confetti.start(2000)
      return winner = turn
		} else if(!board.includes(null)) {
      winner = "T"
    }
  
	})
  }


function resetGame() {
  init()
  resetBtn.hidden = true
}

