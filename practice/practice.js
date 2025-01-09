
function game(gamename="")
{
  
let score=0;

return function win(){

  score++;
  return `your name is ${gamename} ${score}`;

}


}
const playTheGame = game('hockey');
