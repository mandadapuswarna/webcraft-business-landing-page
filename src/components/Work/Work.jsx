const projects = [
  {
    name: "FinEdge",
    category: "Finance Platform",
    description: "A finance dashboard for modern teams.",
  },
  {
    name: "LocalBite",
    category: "Food Discovery",
    description: "A food discovery platform for curious locals.",
  },
  {
    name: "FitTrack",
    category: "Wellness Product",
    description: "A personal fitness dashboard built for consistency.",
  },
];

export default function Work() {
  return (
    <section id="work" className="work">
      <p>SELECTED WORK</p>
      <h2>Designed for real people and real business goals.</h2>
      <div className="project-grid">
        {projects.map(({ name, category, description }, index) => (
          <article className="project-card" key={name}>
            <div className={`project-visual project-visual-${index + 1}`} aria-hidden="true">
              <span className="visual-window" />
              <span className="visual-line visual-line-short" />
              <span className="visual-line" />
              <span className="visual-line visual-line-medium" />
            </div>
            <p className="project-category">{category}</p>
            <h3>{name}</h3>
            <p className="project-description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
