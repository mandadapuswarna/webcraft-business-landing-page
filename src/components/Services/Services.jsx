const services = [
  ["Web Design", "Clear interfaces that communicate your brand."],
  ["Frontend Development", "Fast, responsive React applications."],
  ["UI Systems", "Reusable components that scale."],
];

export default function Services() {
  return (
    <section id="services">
      <h2>What we do</h2>
      <div className="cards">
        {services.map(([title, description]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Learn more →</span>
          </article>
        ))}
      </div>
    </section>
  );
}
