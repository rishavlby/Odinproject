// function to find shortest distance
//algoithm - BFS 
function knightMoves(start, end) {

//possible moves
    const moves = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
  //verify if vertex is still in chessboard
    function validPosition(x, y) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  // [current position, path]
    const queue = [[start, [start]]];  
    // visited set
    const visited = new Set();
  
    while (queue.length > 0) {
      const [position, path] = queue.shift();
      const [x, y] = position;
  
      if (x === end[0] && y === end[1]) {
        return path;
      }
  
      const key = `${x},${y}`;
      if (!visited.has(key)) {
        visited.add(key);
  
        for (let [dx, dy] of moves) {
          const newX = x + dx;
          const newY = y + dy;
  
          if (validPosition(newX, newY)) {
            queue.push([[newX, newY], [...path, [newX, newY]]]);
          }
        }
      }
    }
  
    return null;
  }
  
  
// Print move
  console.log(knightMoves([0, 0], [5, 5])); 
