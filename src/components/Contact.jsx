import { useState } from "react";

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    people: "",
    date: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) setSubmitted(false);
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(form.date);
    const now = new Date();

    if (selectedDate < now) {
      setError("Please select a future date and time.");
      return;
    }

    if (form.name && form.people && form.date) {
      onSubmit(form);
      setSubmitted(true);
      setForm({ name: "", people: "", date: "", message: "" });
    }
  };

  const getMinDateTimeLocal = () => {
    const now = new Date();
    now.setSeconds(0, 0); 
    return now.toISOString().slice(0, 16);
  };

  return (
    <section className="text-sm sm:text-base">
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
        Reserve a table, ask for today's special or just send us a message:
      </p>

      {submitted && (
        <p className="text-green-600 mb-4 text-sm sm:text-base">Message sent successfully!</p>
      )}
      {error && (
        <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>
      )}

      <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          className="w-full border border-gray-300 px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="people"
          className="w-full border border-gray-300 px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
          type="number"
          placeholder="How many people"
          value={form.people}
          onChange={handleChange}
          min={1}
          required
        />
        <input
          name="date"
          className="w-full border border-gray-300 px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
          type="datetime-local"
          value={form.date}
          onChange={handleChange}
          min={getMinDateTimeLocal()}
          required
        />
        <textarea
          name="message"
          className="w-full border border-gray-300 px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
          placeholder="Message / Special requirements"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}
