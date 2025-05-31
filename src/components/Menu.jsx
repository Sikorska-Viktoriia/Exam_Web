const menuItems = [
  { name: "Bread Basket", price: 5.5, description: "Assortment of fresh baked fruit breads and muffins" },
  { name: "Honey Almond Granola", price: 7.0, description: "Natural cereal of honey toasted oats, raisins, almonds and dates" },
  { name: "Belgian Waffle", price: 7.5, description: "Vanilla flavored batter with malted flour" },
];

export default function Menu({ onItemSelect }) {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">${item.price.toFixed(2)}</span>
              <button
                className="bg-black text-white px-2 py-1 rounded"
                onClick={() => onItemSelect(item)}
              >
                Info
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
