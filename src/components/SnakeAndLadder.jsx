import React, { useState } from "react";

export default function SnakeAndLadder() {
  const [position, setPosition] = useState(1);
  const [dice, setDice] = useState(null);
  const [won, setWon] = useState(false); // NEW: track if won

  const snakes = {
    99: 21,
    95: 75,
    70: 55,
    52: 42,
  };

  const ladders = {
    3: 22,
    15: 44,
    25: 65,
    60: 85,
  };

  const rollDice = () => {
    if (won) return; // prevent further rolling
    const roll = Math.floor(Math.random() * 6) + 1;
    let newPos = position + roll;
    if (newPos > 100) newPos = position;

    if (snakes[newPos]) {
      newPos = snakes[newPos];
    } else if (ladders[newPos]) {
      newPos = ladders[newPos];
    }

    setDice(roll);
    setPosition(newPos);

    if (newPos === 100) {
      setWon(true);
      // Optional: play a sound, fireworks, etc.
    }
  };

  const renderBoard = () => {
    const cells = [];

    for (let row = 9; row >= 0; row--) {
      let rowCells = [];

      for (let col = 0; col < 10; col++) {
        const cellNumber = row % 2 === 0
          ? row * 10 + col + 1
          : row * 10 + (9 - col) + 1;

        const isPlayer = cellNumber === position;
        const isSnake = snakes[cellNumber];
        const isLadder = ladders[cellNumber];

        rowCells.push(
          <div
            key={cellNumber}
            style={{
              width: "45px",
              height: "45px",
              border: "1px solid #aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isPlayer
                ? "#90ee90"
                : isSnake
                ? "#f28b82"
                : isLadder
                ? "#a7ffeb"
                : "#fff",
              fontWeight: isPlayer ? "bold" : "normal",
              fontSize: "0.8rem",
              position: "relative",
            }}
          >
            {cellNumber}
            <span style={{ fontSize: "0.9rem", position: "absolute", top: 2, right: 2 }}>
              {isSnake ? "🐍" : isLadder ? "🪜" : ""}
            </span>
          </div>
        );
      }

      cells.push(
        <div key={row} style={{ display: "flex" }}>
          {rowCells}
        </div>
      );
    }

    return cells;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", position: "relative" }}>
      <h2>🔁 Snake & Ladder 🎲</h2>
      <button onClick={rollDice} style={{ padding: "10px 20px", marginBottom: "10px" }} disabled={won}>
        🎲 Roll Dice
      </button>
      <p>Dice rolled: <strong>{dice}</strong></p>
      <p>Current Position: <strong>{position}</strong></p>

      <div style={{ margin: "auto", width: "fit-content", marginTop: "20px" }}>
        {renderBoard()}
      </div>

      {/* WIN MESSAGE + FLOWER ANIMATION */}
      {won && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,0.95)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          zIndex: 9999,
          animation: "fadeIn 1s ease-in-out",
        }}>
          <div style={{ fontSize: "4rem" }}>🌸🌸🌸</div>
          <div>You did it! 🎉</div>
          <div style={{ fontSize: "4rem" }}>🌸🌸🌸</div>
        </div>
      )}
    </div>
  );
}
