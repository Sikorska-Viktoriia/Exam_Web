import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import examImage from "../assets/exam.jpg";

export default function Confirmation() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("lastBooking");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  if (!formData) {
    return (
      <div className="p-6 font-sans text-center">
        <p className="text-gray-600">No booking data found.</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center grayscale"
      style={{ backgroundImage: `url(${examImage})` }}
    >
      {/* Затемнення поверх зображення */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-0"></div>

      {/* Модальне вікно поверх */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white p-6 rounded max-w-xl w-full relative shadow-lg max-h-[80vh] overflow-auto font-sans z-20">
          <h2 className="bg-black text-white text-3xl py-2 px-6 -mx-6 -mt-6 mb-6 rounded-t">
            Booking Confirmed!
          </h2>

          <p className="text-gray-700 mb-6 text-center">
            Thank you for your reservation. Here are the details:
          </p>

          <div className="text-left space-y-3 text-lg mb-6">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>People:</strong> {formData.people}</p>
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleString()}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.close()}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200"
            >
              Close Tab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
