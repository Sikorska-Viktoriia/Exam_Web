import { useState } from "react";

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    people: "",
    date: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.people && form.date) {
      onSubmit(form);
      setSubmitted(true);
      setForm({ name: "", people: "", date: "", message: "" });
    }
  };

  return (
    <section>
      {/* Підзаголовок */}
      <p className="text-gray-600 mb-6 text-sm">
        Reserve a table, ask for today's special or just send us a message:
      </p>

      {submitted && (
        <p className="text-green-600 mb-4">Message sent successfully!</p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="people"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          type="number"
          placeholder="How many people"
          value={form.people}
          onChange={handleChange}
          min={1}
          required
        />
        <input
          name="date"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          type="datetime-local"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Message / Special requirements"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition duration-200"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}
