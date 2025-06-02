import Modal from "react-modal";
import Contact from "./Contact.jsx";

Modal.setAppElement("#root");

export default function ContactModal({ isOpen, onSubmit, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-24 px-2 sm:px-0"
      className="bg-white rounded w-full max-w-[95vw] sm:max-w-4xl relative shadow-lg max-h-[85vh] overflow-auto p-0 animate-zoomIn"
    >
      {/* Header */}
      <div className="bg-black text-white text-xl sm:text-3xl font-semibold py-3 px-4 sm:px-6 flex justify-between items-center">
        <span>Contact</span>
        <button
          className="absolute top-2 right-2 text-white text-lg sm:text-xl p-2 hover:bg-gray-300 hover:text-black transition-colors duration-200 rounded-full"
          onClick={onClose}
          aria-label="Close contact modal"
        >
          ✖
        </button>
      </div>

      {/* Form body */}
      <div className="p-4 sm:p-6">
        <Contact onSubmit={onSubmit} />
      </div>
    </Modal>
  );
}
