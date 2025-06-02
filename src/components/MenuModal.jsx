import Modal from "react-modal";
import { menuData } from "../data/menuData";

Modal.setAppElement("#root");

export default function MenuModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Menu"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-0"
      className="bg-white rounded max-w-[95vw] sm:max-w-4xl w-full relative shadow-lg max-h-[85vh] overflow-auto animate-zoomIn"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu modal"
        className="absolute top-2 right-2 text-gray-700 text-xl sm:text-2xl p-2 hover:bg-gray-200 rounded-full transition"
        style={{ lineHeight: 1 }}
      >
        ✖
      </button>

      {/* Menu Content */}
      <div className="space-y-4">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-6">
            {/* Full-width black header (with negative margins) */}
            <div className="-mx-4 sm:-mx-6">
              <h2
                className="bg-black text-white text-xl sm:text-2xl py-2 px-4 sm:px-6"
                style={{ lineHeight: "1.5" }}
              >
                {category.replace(/([A-Z])/g, " $1")}
              </h2>
            </div>

            {/* Item list */}
            <ul className="mt-2 pl-2 sm:pl-4 pr-2 sm:pr-4 space-y-2">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm sm:text-base flex justify-between items-center"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-700 font-semibold ml-4">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
}
