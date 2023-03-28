import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "./InputForm";
import Guess from "./Guess";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [input, setInput] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function onSubmit(event) {
    event.preventDefault();
    if (input.length !== 5) {
      console.info("INVALID INPUT");
    } else {
      const guessResult = checkGuess(input, answer);
      addGuesses(guessResult);
      console.info({ input });
      if (input === answer) {
        setGameStatus("win");
      }

      if (
        gameStatus === "ongoing" &&
        guesses.length === NUM_OF_GUESSES_ALLOWED - 1
      ) {
        setGameStatus("lose");
      }
    }
    setInput("");
  }
  function addGuesses(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);

    setGuesses(newGuesses);
  }

  return (
    <>
      {/*<PreviousGuesses guesses={guesses} />*/}
      <Guess guesses={guesses} />
      <InputForm
        value={input}
        setValue={setInput}
        onSubmit={onSubmit}
        disabled={gameStatus !== "ongoing"}
      />

      {gameStatus === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {gameStatus === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
