const services = [
  {
    title: "Web Design",
    description: "Clear interfaces that communicate your brand.",
  },
  {
    title: "Frontend Development",
    description: "Fast, responsive React applications.",
  },
  {
    title: "UI Systems",
    description: "Reusable components that scale.",
  },
  {
    title: "Responsive Design",
    description: "Flexible layouts that work beautifully on every screen.",
  },
  {
    title: "Website Optimization",
    description: "Faster experiences that turn visits into meaningful action.",
  },
  {
    title: "Accessibility",
    description: "Inclusive digital products designed for more people.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2>What we do</h2>
      <div className="cards">
        {services.map(({ title, description }, index) => (
          <article key={title}>
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Learn more →</span>
          </article>
        ))}
      </div>
    </section>
  );
}
