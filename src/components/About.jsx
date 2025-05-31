export default function About() {
  return (
    <section className="p-6 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">About Catering</h2>
        <p className="mb-4">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all: both look and taste.</p>
      </div>
      <img
        src="https://www.w3schools.com/w3images/tablesetting2.jpg"
        alt="Table setting"
        className="rounded md:w-1/2"
      />
    </section>
  );
}