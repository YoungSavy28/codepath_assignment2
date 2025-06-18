// App.jsx
import { useState } from 'react';
import './App.css';

const cards = [
    { question: "How many rings do the Yankees have?", answer: "27" },
    { question: "Who is the all-time home run leader?", answer: "Barry Bonds" },
    { question: "Who is the all-time strikeout leader?", answer: "Nolan Ryan" },
    { question: "Who is the all-time hits leader?", answer: "Pete Rose" },
    { question: "Who is the all-time wins leader?", answer: "Cy Young" },
    { question: "Who has the highest batting average in MLB history?", answer: ".366" },
    { question: "Who has the most career saves?", answer: "Mariano Rivera" },
    { question: "Who is the only player to hit .400 in a season since Ted Williams?", answer: ".394 by Tony Gwynn in 1994" },
    { question: "Who holds the record for most home runs in a single season?", answer: "Barry Bonds with 73 in 2001" },
    { question: "What is the longest game in MLB history?", answer: "26 innings between the Brooklyn Robins and Boston Braves in 1920" },
    { question: "Who was the first player to break the color barrier in MLB?", answer: "Jackie Robinson in 1947" },
    { question: "Who has the most career stolen bases?", answer: "Rickey Henderson with 1,406" },
    { question: "Who is the only player to win the MVP award unanimously?", answer: "Ken Griffey Jr. in 1997" },
    { question: "What is the fastest pitch ever recorded?", answer: "105.1 mph by Aroldis Chapman in 2010" },
    { question: "Who has the most career triples?", answer: "Sam Crawford with 309" },
    { question: "Who is the all-time leader in on-base percentage?", answer: ".482 by Ted Williams" },
    { question: "who is the captain of the New York Yankees?", answer: "Aaron Judge" },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="app">
      <h1>Flashcard Quiz</h1>
      <p className="description">Test your MLB knowledge with this flashcard deck!</p>
      <p>Total Cards: {cards.length}</p>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
        <div className="card-front">
          {cards[currentCardIndex].question}
        </div>
        <div className="card-back">
          {cards[currentCardIndex].answer}
        </div>
      </div>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
}

export default App;
