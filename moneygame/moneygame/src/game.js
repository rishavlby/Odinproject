import { useState, useEffect } from "react";
import "./MemoryGame.css";

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [turns, setTurns] = useState(0);
  const [bestScore, setBestScore] = useState(
    () => Number(localStorage.getItem("bestScore")) || null
  );

/*fetch images from aPI
1. fetch url
2. get into json format
3. map will iterate over the item and then download url */
  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=6");
    const data = await response.json();
    return data.map((item) => item.download_url);
  };

  const shuffleCards = async () => {
    const images = await fetchImages();
    const shuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((src, i) => ({ id: i, src }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setTurns(0);
  };

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setTurns((t) => t + 1);
      const [first, second] = newFlipped;
      if (cards[first].src === cards[second].src) {
        setMatched((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlipped([]), 800);
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

 // Check if all cards matched
 useEffect(() => {
    if (matched.length > 0 && matched.length === cards.length) {
      // All matched → check for best score
      if (!bestScore || turns < bestScore) {
        setBestScore(turns);
        localStorage.setItem("bestScore", turns);
      }
    }
  }, [matched, cards.length, turns, bestScore]);

  return (
    <div className="MemoryGame">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Your Score: {turns}</p>
      <p>Highest Score: {bestScore !== null ? bestScore : "—"}</p>

      <div className="card-grid">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <img
                src={
                  isFlipped ? card.src: "c3.jpg"
                }
                alt="card"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
