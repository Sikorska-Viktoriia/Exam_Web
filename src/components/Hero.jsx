import { useState, useEffect, useRef } from "react";
import examImage from "../assets/exam.jpg";
import AdvancedCalculator from "./Calculator";

export default function Hero({ onMenuClick, onContactClick }) {
  const [showCalculator, setShowCalculator] = useState(false);
  const calculatorRef = useRef(null);

  useEffect(() => {
    if (showCalculator && calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showCalculator]);

  return (
    <div className="font-sans">
      {/* Background section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center grayscale"
        style={{ backgroundImage: `url(${examImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-0"></div>

        {/* Buttons */}
        <div className="absolute top-4 left-4 flex flex-col space-y-3 z-50 sm:top-6 sm:left-6">
          <button
            onClick={onMenuClick}
            className="bg-black text-white px-6 py-2 sm:px-10 sm:py-3 text-sm sm:text-lg uppercase rounded shadow-md hover:bg-gray-100 hover:text-black transition"
          >
            Menu
          </button>
          <button
            onClick={onContactClick}
            className="bg-black text-white px-6 py-2 sm:px-10 sm:py-3 text-sm sm:text-lg uppercase rounded shadow-md hover:bg-gray-100 hover:text-black transition"
          >
            Contact
          </button>
          <button
            onClick={() => setShowCalculator(true)}
            className="bg-white text-black px-6 py-2 sm:px-10 sm:py-3 text-sm sm:text-lg uppercase rounded shadow-md hover:bg-gray-900 hover:text-white transition"
          >
            Open Calculator
          </button>
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wider">
            logo
          </h1>
        </div>

        {/* Contact info */}
        <div className="absolute bottom-4 left-4 text-white text-xs sm:text-base space-y-1 sm:space-y-2 z-10">
          <p className="font-medium">Mon - Fri 10-23 | Sat 14-02</p>
          <p className="font-medium">42 Village St, New York</p>
          <p className="text-gray-300 font-medium text-[10px] sm:text-sm">
            Powered by Sikorska Viktoriia
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      {showCalculator && (
        <div
          ref={calculatorRef}
          className="relative w-full bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${examImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
            <AdvancedCalculator
              show={showCalculator}
              onClose={() => setShowCalculator(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
