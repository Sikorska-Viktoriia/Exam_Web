import Modal from "react-modal";
import Contact from "./Contact.jsx";

Modal.setAppElement("#root");

export default function ContactModal({ isOpen, onSubmit, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className="bg-white p-6 rounded max-w-md w-full relative shadow-lg max-h-[90vh] overflow-auto"
    >
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={onClose}
        aria-label="Close contact modal"
      >
        ✖
      </button>
      <Contact onSubmit={onSubmit} />
    </Modal>
  );
}
