import "./App.css";
import React, { useState } from "react";

import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + "“" + quote.content + "”"
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="share-links">
          <TwitterShareButton
            url={quote.author + " once said: " + "“" + quote.content + "”"}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton
            url={quote.author + " once said: " + "“" + quote.content + "”"}
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <EmailShareButton
            url={quote.author + " once said: " + "“" + quote.content + "”"}
          >
            <EmailIcon size={40} round />
          </EmailShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
