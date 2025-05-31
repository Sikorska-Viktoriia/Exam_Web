import { menuData } from '../data/menuData';

export default function Menu({ onItemSelect }) {
  return (
    <section className="p-6 bg-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>

      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-bold mb-2 capitalize">
            {category.replace(/([A-Z])/g, ' $1')}
          </h3>
          <ul>
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    className="bg-black text-white px-2 py-1 rounded"
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
