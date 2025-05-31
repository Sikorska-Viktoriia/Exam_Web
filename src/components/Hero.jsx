import examImage from "../assets/exam.jpg";

export default function Hero({ onMenuClick, onContactClick }) {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center grayscale"
      style={{ backgroundImage: `url(${examImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-0"></div>

      <div className="absolute top-6 left-6 flex flex-col space-y-4 z-50">
        <button
          onClick={onMenuClick}
          className="bg-black text-white px-10 py-3 text-lg  uppercase"
        >
          Menu
        </button>
        <button
          onClick={onContactClick}
          className="bg-black text-white px-6 py-3 text-lg  uppercase"
        >
          Contact
        </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-6xl">logo</h1>
      </div>

      <div className="absolute bottom-6 left-6 text-white text-base space-y-2 z-10">
        <p className="text-lg font-medium">
          Monday - Friday 10-23 | Saturday 14-02
        </p>
        <p className="text-lg font-medium">42 Village St, New York</p>
        <p className="text-sm text-gray-300 font-medium">
          Powered by Sikorska Viktoriia
        </p>
      </div>
    </div>
  );
}
