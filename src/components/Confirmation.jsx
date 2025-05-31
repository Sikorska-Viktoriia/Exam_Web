export default function Confirmation({ formData, onBack }) {
  if (!formData) return null;

  return (
    <section className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Booking Confirmation</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>People:</strong> {formData.people}</p>
      <p>
        <strong>Date:</strong>{" "}
        {formData.date ? new Date(formData.date).toLocaleString() : "No date provided"}
      </p>
      <p><strong>Message:</strong> {formData.message || "No additional message"}</p>

      <button
        onClick={onBack}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Back to Home
      </button>
    </section>
  );
}
