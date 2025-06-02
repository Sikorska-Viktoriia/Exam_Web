import { menuData } from '../data/menuData';

export default function Menu({ onItemSelect }) {
  return (
    <section className="p-4 sm:p-6 bg-gray-100 max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
        Our Menu
      </h2>

      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg sm:text-xl font-bold mb-3 capitalize text-gray-800">
            {category.replace(/([A-Z])/g, ' $1')}
          </h3>

          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-3 rounded shadow-sm"
              >
                <div className="text-sm sm:text-base font-medium text-gray-900">{item.name}</div>

                <div className="flex justify-between sm:justify-end items-center mt-2 sm:mt-0 space-x-3">
                  <span className="text-gray-700 text-sm sm:text-base">${item.price.toFixed(2)}</span>
                  <button
                    className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded hover:bg-gray-800 transition"
                    onClick={() => onItemSelect(item)}
                  >
                    Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
