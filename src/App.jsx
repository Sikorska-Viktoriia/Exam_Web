import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import MenuModal from "./components/MenuModal.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Confirmation from "./components/Confirmation.jsx";

// Обгортка для головного інтерфейсу
function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setMenuOpen(true);
    setContactOpen(false);
  };

  const handleContactOpen = () => {
    setContactOpen(true);
    setMenuOpen(false);
  };

  const handleContactSubmit = (formData) => {
    localStorage.setItem("lastBooking", JSON.stringify(formData));
    setContactOpen(false);
    // Перехід на сторінку підтвердження
    setTimeout(() => {
      navigate("/confirmation");
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Hero onMenuClick={handleMenuOpen} onContactClick={handleContactOpen} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      <ContactModal
        isOpen={isContactOpen}
        onSubmit={handleContactSubmit}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

// Компонент App з маршрутизацією
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}
