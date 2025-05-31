import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", people: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.people && form.date) {
      setSubmitted(true);
      setForm({ name: "", people: "", date: "", message: "" });
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      {submitted && <p className="text-green-600 mb-4">Message sent successfully!</p>}
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <input name="name" className="w-full border px-4 py-2" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="people" className="w-full border px-4 py-2" type="number" placeholder="How many people" value={form.people} onChange={handleChange} required />
        <input name="date" className="w-full border px-4 py-2" type="datetime-local" value={form.date} onChange={handleChange} required />
        <textarea name="message" className="w-full border px-4 py-2" placeholder="Message / Special requirements" value={form.message} onChange={handleChange}></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2">SEND MESSAGE</button>
      </form>
    </section>
  );
}