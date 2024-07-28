import { useState } from "react";
import quotes from "./assets/quotes.json";
import "./App.css";

const quoteGenerator = (qutots) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const colorGenerator = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const [quote, setQuote] = useState(quoteGenerator(quotes));
  const [color, setColor] = useState(colorGenerator());
  return (
    <div className="background-div" style={{ "--color": color }}>
      <div className="quote-div">
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
        <button
          onClick={() => {
            setQuote(quoteGenerator(quotes));
            setColor(colorGenerator());
          }}
          style={{ position: "absolute", bottom: "10px" }}
        >
          Change Quote
        </button>
      </div>
    </div>
  );
}

export default App;
