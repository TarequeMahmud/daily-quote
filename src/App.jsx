import { useEffect, useState } from "react";
import quotes from "./assets/quotes.json";
import "./App.css";
import { colorGenerator, quoteGenerator } from "./utils/utils.js";

function App() {
  const [quote, setQuote] = useState(quoteGenerator(quotes));
  const [color, setColor] = useState(colorGenerator());

  useEffect(() => {
    document.documentElement.style.setProperty("--color", color);
    return () => document.documentElement.style.removeProperty("--color");
  }, [color]);
  return (
    <div className="background-div">
      <div className="quote-div">
        <h1 className="heading">Daily Quote</h1>
        <p className="quote">{quote.quote}</p>
        <p className="author">{quote.author}</p>
        <button
          onClick={() => {
            setQuote(quoteGenerator(quotes));
            setColor(colorGenerator());
          }}
          className="button"
        >
          Change Quote
        </button>
      </div>
    </div>
  );
}

export default App;
