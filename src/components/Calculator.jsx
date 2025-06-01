import { useState, useEffect, useCallback } from "react";

export default function AdvancedCalculator({ show, onClose }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const calculateResult = useCallback(() => {
    try {
      const expr = input
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/\^/g, "**");

      const result = Function(`'use strict'; return (${expr})`)();
      setInput(String(result));
      setHistory((prev) => [...prev, `${input} = ${result}`]);
    } catch {
      setInput("Error");
    }
  }, [input]);

  useEffect(() => {
    const handleKey = (e) => {
      if (/[0-9+\-*/.^()]/.test(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        e.preventDefault();
        calculateResult();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Escape") {
        setInput("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [calculateResult]);

  if (!show) return null;

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "^", "+",
    "(", ")", "√(", "=",
    "sin(", "cos(", "tan(", "log(",
    "ln(", "DEL", "AC"
  ];

  const wrapperClass = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";
  const inputClass = darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black";

  return (
    // Ось тут убрали фон bg-black bg-opacity-60
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`p-6 rounded-xl shadow-lg max-w-sm w-full relative ${wrapperClass} animate-zoomIn`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-white text-xl p-2 hover:bg-gray-300 hover:text-black transition-colors duration-200"
          aria-label="Close calculator"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">~ Calculator ~</h2>
        <div className="flex justify-between items-center mb-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Dark Mode
          </label>
        </div>
        <input
          type="text"
          value={input}
          readOnly
          className={`w-full p-3 border text-right text-xl rounded mb-4 ${inputClass}`}
        />
        <div className="grid grid-cols-4 gap-3 mb-4">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`p-3 text-lg rounded font-semibold transition ${
                btn === "="
                  ? "bg-blue-400 text-white hover:bg-blue-900"
                  : btn === "AC"
                  ? "bg-blue-400 text-white hover:bg-blue-900 col-span-4"
                  : darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="max-h-40 overflow-y-auto border-t pt-2">
          <h3 className="text-lg font-semibold mb-1">History</h3>
          <ul className="text-sm list-disc pl-5">
            {history.slice().reverse().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
