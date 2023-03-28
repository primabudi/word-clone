import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Guess = ({ guesses }) => {
  function generateEmptyGuess() {
    return new Array(5).fill().map(() => ({
      letter: "",
      status: "",
    }));
  }

  const formattedGuesses = Array.from(
    { length: NUM_OF_GUESSES_ALLOWED },
    (_, i) => guesses[i] ?? generateEmptyGuess()
  );

  return (
    <div className="guess-results">
      {formattedGuesses.map((guess, guessIdx) => {
        return (
          <p key={guessIdx} className="guess">
            {guess.map((val, idx) => {
              return (
                <span key={idx} className={`cell ${val.status}`}>
                  {val.letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

export default Guess;
