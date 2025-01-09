

(function() 
{
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
  
    // Attach click events to cells
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  
    // Attach event to reset button
    document.getElementById('reset').addEventListener('click', resetGame);
  
    // Win conditions (indexes in the board array)
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    // Function to check for a winner
    function checkWinner() {
  
      for (let condition of winCombinations) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          gameActive = false;
          document.getElementById('message').textContent = `${board[a]} wins!`;
          return;
        }
      }
  
      // Check for a draw
      if (!board.includes('')) {
        gameActive = false;
        document.getElementById('message').textContent = "Game is a Draw! Play Again!!";
      }
    }
  
    // Function to handle cell click
    function handleCellClick(e) {

      if (!gameActive) return;
  
      const cell = e.target;
      const index = cell.getAttribute('data-index');
  
      if (board[index] !== '') return;
  
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
  
      checkWinner();
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  
    // Function to reset the game
    /* Reset all variables */
    function resetGame() {
               
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      gameActive = true;
      document.getElementById('message').textContent = '';
      cells.forEach(cell => {
        cell.textContent = '';
      });
    }
  
  })();