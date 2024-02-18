"use client"
import React, { useState } from "react";
import "./styles.css";

const colorsData = [
  { name: "Red", translation: "Qizil", colorCode: "#ff0000" },
  { name: "Orange", translation: "To'qo'z", colorCode: "#ffa500" },
  { name: "Yellow", translation: "Sariq", colorCode: "#ffff00" },
  { name: "Green", translation: "Yashil", colorCode: "#008000" },
  { name: "Blue", translation: "Ko'k", colorCode: "#0000ff" },
  { name: "Purple", translation: "Binafsha rang", colorCode: "#800080" },
  { name: "Pink", translation: "Roz", colorCode: "#ffc0cb" },
  { name: "Brown", translation: "Jigarrang", colorCode: "#a52a2a" },
  { name: "White", translation: "Oq", colorCode: "#ffffff" },
  { name: "Black", translation: "Qora", colorCode: "#000000" },
  { name: "Gray", translation: "Kulrang", colorCode: "#808080" },
  { name: "Cyan", translation: "Siniy", colorCode: "#00ffff" },
  { name: "Magenta", translation: "Magenta", colorCode: "#ff00ff" },
  { name: "Turquoise", translation: "Firuz", colorCode: "#40e0d0" },
  { name: "Indigo", translation: "Kambala", colorCode: "#4b0082" },
  { name: "Violet", translation: "Binafsha", colorCode: "#ee82ee" },
  { name: "Maroon", translation: "Ko'k marjon", colorCode: "#800000" },
  { name: "Olive", translation: "Zeytun", colorCode: "#808000" },
  { name: "Teal", translation: "To'lporang", colorCode: "#008080" },
  { name: "Beige", translation: "Bej", colorCode: "#f5f5dc" },
];

export default function ColorsgamePage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [randomColor, setRandomColor] = useState(null);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setRandomColor(colorsData[Math.floor(Math.random() * colorsData.length)]);
  };

  const handleColorSelection = (selectedColor) => {
    if (selectedColor === randomColor.name) {
      setScore(score + 1);
    }
    startGame();
  };

  return (
    <div>
      <h1>Color Matching Game</h1>
      {gameStarted && randomColor && (
        <div className="game-container">
          <h3>Click on the color: {randomColor.translation}</h3>
          <div className="color-options">
            {colorsData.map((colorData, index) => (
              <div
                className="color-option"
                style={{ backgroundColor: colorData.colorCode }}
                key={index}
                onClick={() => handleColorSelection(colorData.name)}
              >
                <span>{colorData.name}</span>
              </div>
            ))}
          </div>
          <p>Score: {score}</p>
        </div>
      )}
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}