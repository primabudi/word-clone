import React from "react";

const PreviousGuesses = ({ guesses = [] }) => {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p key={guess.date} className="guess">
            {guess.value}
          </p>
        );
      })}
    </div>
  );
};

export default PreviousGuesses;
