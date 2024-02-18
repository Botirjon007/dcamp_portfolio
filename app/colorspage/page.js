"use client";
import React, { useState } from "react";


export default function ColorsPage() {
  // State to store the color value
  const [color, setColor] = useState("");
  // State to toggle visibility of color list
  const [showColors, setShowColors] = useState(false);

  // Function to handle className changes
  const handleclassNameChange = (event) => {
    const classNameColor = event.target.value;
    setColor(classNameColor); // Update color when className changes
    document.body.style.backgroundColor = classNameColor; // Update body background color
  };

  // Function to toggle visibility of color list
  const toggleColorList = () => {
    setShowColors(!showColors);
  };

  // List of common colors in English and Uzbek
  const colors = [
    { name: "Red", translation: "Qizil" },
    { name: "Orange", translation: "To'qo'z" },
    { name: "Yellow", translation: "Sariq" },
    { name: "Green", translation: "Yashil" },
    { name: "Blue", translation: "Ko'k" },
    { name: "Purple", translation: "Binafsha rang" },
    { name: "Pink", translation: "Roz" },
    { name: "Brown", translation: "Jigarrang" },
    { name: "White", translation: "Oq" },
    { name: "Black", translation: "Qora" },
    { name: "Gray", translation: "Kulrang" },
    { name: "Cyan", translation: "Siniy" },
    { name: "Magenta", translation: "Magenta" },
    { name: "Turquoise", translation: "Firuz" },
    { name: "Indigo", translation: "Kambala" },
    { name: "Violet", translation: "Binafsha" },
    { name: "Maroon", translation: "Ko'k marjon" },
    { name: "Olive", translation: "Zeytun" },
    { name: "Teal", translation: "To'lporang" },
    { name: "Beige", translation: "Bej" },
  ];

  return (
    <div>
      {/* className for entering color */}
      <className
        type="text"
        placeholder="Enter color"
        value={color}
        onChange={handleclassNameChange}
      />
      {/* Collapsible button to show color list */}
      <button onClick={toggleColorList}>
        {showColors ? "Hide Colors" : "Show Colors"}
      </button>
      {/* Display color list if showColors is true */}
      {showColors && (
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              {color.translation} ({color.name})
            </li>
          ))}
        </ul>
      )}
      {/* Apply background color to a top-level element */}
      <div className="tom">{/* Your application content here */}</div>
    </div>
  );
}
