import Modal from "react-modal";
import { menuData } from "../data/menuData";

Modal.setAppElement("#root");

export default function MenuModal({ isOpen, onClose, onItemSelect, item }) {
  // Якщо передано item — показуємо деталі цього пункту меню
  if (item) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Menu item details"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        className="bg-white p-6 rounded max-w-md w-full relative shadow-lg"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
          aria-label="Close menu modal"
        >
          ✖
        </button>
        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
        <p className="mb-2 text-gray-600">Price: ${item.price.toFixed(2)}</p>
      </Modal>
    );
  }

  // Інакше — показуємо список меню
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Menu"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className="bg-white p-6 rounded max-w-3xl w-full relative shadow-lg max-h-[80vh] overflow-auto"
    >
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={onClose}
        aria-label="Close menu modal"
      >
        ✖
      </button>
      <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>

      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-bold mb-2 capitalize">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>
          <ul>
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center mb-2 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
                onClick={() => {
                  onItemSelect(item);
                }}
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Modal>
  );
}
