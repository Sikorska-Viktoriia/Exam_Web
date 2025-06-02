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
    if (!show) return;

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
  }, [calculateResult, show]);

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

  if (!show) return null;

  return (
    <div
      className={`p-4 sm:p-6 ${wrapperClass} flex flex-col max-h-screen`}
      style={{ overflowY: "auto" }}
    >
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold select-none">~ Calculator ~</h2>
        <button
          onClick={() => {
            onClose();
            setInput("");
            setHistory([]);
          }}
          className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-red-700 transition text-sm sm:text-base"
        >
          Повернутися на головну
        </button>
      </header>

      <label className="flex items-center gap-2 sm:gap-3 mb-4 select-none text-sm sm:text-base">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="cursor-pointer"
        />
        Dark Mode
      </label>

      <input
        type="text"
        value={input}
        readOnly
        className={`w-full p-3 sm:p-4 border rounded mb-6 text-right text-xl sm:text-2xl font-mono ${inputClass} select-text`}
      />

      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 flex-grow overflow-auto max-h-[50vh] sm:max-h-[60vh]">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`p-3 sm:p-4 text-lg sm:text-xl rounded font-semibold transition select-none whitespace-nowrap
              ${
                btn === "="
                  ? "bg-blue-500 text-white hover:bg-blue-700"
                  : btn === "AC"
                  ? "bg-blue-500 text-white hover:bg-blue-700 col-span-4 sm:col-auto w-full sm:w-auto"
                  : darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }
            `}
          >
            {btn}
          </button>
        ))}
      </div>

      <section className="max-h-40 sm:max-h-48 overflow-y-auto border-t pt-3">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 select-none">History</h3>
        <ul className="text-xs sm:text-sm list-disc pl-5 space-y-1">
          {history.slice().reverse().map((item, index) => (
            <li key={index} className="break-words whitespace-pre-wrap">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
