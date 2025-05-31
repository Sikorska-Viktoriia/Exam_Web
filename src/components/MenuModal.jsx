export default function MenuModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-md w-full relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >✖</button>
        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
        <p className="mb-2 text-gray-600">{item.description}</p>
        <p className="text-lg font-semibold">Price: ${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}