const benefits = [
  {
    title: "User-focused design",
    description: "We make thoughtful decisions around the people using your product.",
  },
  {
    title: "Responsive development",
    description: "Every experience is built to feel clear and capable on any screen.",
  },
  {
    title: "Clean reusable code",
    description: "Reliable components make your product easier to evolve over time.",
  },
  {
    title: "Clear communication",
    description: "You always know what we are working on and why it matters.",
  },
];

export default function Benefits() {
  return (
    <section id="about" className="benefits">
      <div className="benefits-intro">
        <p className="tag">WHY WORK WITH US</p>
        <h2>Small team. Big attention to detail.</h2>
      </div>
      <div className="benefit-list">
        {benefits.map(({ title, description }, index) => (
          <article className="benefit-item" key={title}>
            <span className="benefit-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
