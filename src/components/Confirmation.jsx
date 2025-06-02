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
      className="relative w-full min-h-screen bg-cover bg-center grayscale"
      style={{ backgroundImage: `url(${examImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-0"></div>

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-0 z-10">
        <div className="bg-white p-4 sm:p-6 rounded w-full max-w-md sm:max-w-xl relative shadow-lg max-h-[90vh] overflow-auto font-sans z-20 text-sm sm:text-base">
          <h2 className="bg-black text-white text-2xl sm:text-3xl py-2 px-4 sm:px-6 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-6 rounded-t">
            Booking Confirmed!
          </h2>

          <p className="text-gray-700 mb-4 sm:mb-6 text-center">
            Thank you for your reservation. Here are the details:
          </p>

          <div className="text-left space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-sm sm:text-lg">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>People:</strong> {formData.people}</p>
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleString()}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.close()}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
            >
              Close Tab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
