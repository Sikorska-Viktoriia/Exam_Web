import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import MenuModal from "./components/MenuModal.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Confirmation from "./components/Confirmation.jsx";


export default function App() {
  // Відкриття модалей
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isContactOpen, setContactOpen] = useState(false);

  const [lastBooking, setLastBooking] = useState(null);

  const handleMenuOpen = () => {
    setMenuOpen(true);
    setSelectedItem(null);
    setContactOpen(false);
  };

  const handleContactOpen = () => {
    setContactOpen(true);
    setMenuOpen(false);
    setSelectedItem(null);
  };

  const handleContactSubmit = (formData) => {
    setLastBooking(formData);
    setContactOpen(false);
  };

  const handleBackToHome = () => {
    setLastBooking(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Головний екран з кнопками */}
      <Hero onMenuClick={handleMenuOpen} onContactClick={handleContactOpen} />

      {/* Модальне меню */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onItemSelect={setSelectedItem}
      />

      {/* Деталі меню в іншій модалці */}
      <MenuModal
        isOpen={!!selectedItem && !isMenuOpen}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Модальне вікно контакту */}
      <ContactModal
        isOpen={isContactOpen}
        onSubmit={handleContactSubmit}
        onClose={() => setContactOpen(false)}
      />

      {/* Підтвердження бронювання */}
      {lastBooking && (
        <Confirmation formData={lastBooking} onBack={handleBackToHome} />
      )}
    </div>
  );
}