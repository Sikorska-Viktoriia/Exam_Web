import Modal from "react-modal";
import Contact from "./Contact.jsx";

Modal.setAppElement("#root");

export default function ContactModal({ isOpen, onSubmit, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-24"
      className="bg-white rounded max-w-4xl w-full relative shadow-lg max-h-[60vh] overflow-auto p-0 animate-zoomIn"
    >
      {/* Чорна шапка */}
      <div className="bg-black text-white text-3xl font-semibold py-3 px-6 flex justify-between items-center">
        <span>Contact</span>
        <button
          className="absolute top-2 right-2 bg-transparent text-white text-xl p-2 hover:bg-gray-300 hover:text-black transition-colors duration-200"
          onClick={onClose}
          aria-label="Close contact modal"
        >
          ✖
        </button>
      </div>

      {/* Вміст */}
      <div className="p-6">
        <Contact onSubmit={onSubmit} />
      </div>
    </Modal>
  );
}
