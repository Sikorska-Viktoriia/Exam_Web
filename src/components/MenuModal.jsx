import Modal from "react-modal";
import { menuData } from "../data/menuData";

Modal.setAppElement("#root");

export default function MenuModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Menu"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className="bg-white p-6 rounded max-w-4xl w-full relative shadow-lg max-h-[80vh] overflow-auto"
    >
      {/* Кнопка закриття */}
      <button
  onClick={onClose}
  aria-label="Close menu modal"
  className="absolute top-2 right-2 bg-transparent text-white text-xl p-2 hover:bg-gray-300 hover:text-black transition-colors duration-200"
  style={{ lineHeight: 1 }}
>
  ✖
</button>



      {/* Меню */}
      <div className="space-y-3"> {/* Зменшив відступ між категоріями */}
        {Object.entries(menuData).map(([category, items], index) => (
          <div key={category}>
            {/* Чорна смуга-заголовок категорії */}
            <h2
              className={
                (index === 0 ? "-mt-6 " : "mt-6 ") +
                "bg-black text-white text-3xl py-2 px-6 -mx-6"
              }
              style={{ lineHeight: "1.5" }}
            >
              {category.replace(/([A-Z])/g, " $1")}
            </h2>

            {/* Список страв */}
            <ul className="mt-1 mb-0 pl-0"> {/* Прибрав нижній margin */}
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="py-1 flex"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  <span>
                    {item.name}{" "}
                    <span className="font-semibold ml-1">${item.price.toFixed(2)}</span>
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
