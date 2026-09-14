import "./styles.css";
export default function App() {
  return (
    <>
      <header>
        <b>WebCraft</b>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <button>Let's talk</button>
      </header>
      <main>
        <section className="hero">
          <p className="tag">DIGITAL PRODUCT STUDIO</p>
          <h1>We build websites people love to use.</h1>
          <p className="lead">
            Modern, responsive digital experiences for startups and growing
            businesses.
          </p>
          <button>Start a project →</button>
        </section>
        <section id="services">
          <h2>What we do</h2>
          <div className="cards">
            {[
              ["Web Design", "Clear interfaces that communicate your brand."],
              ["Frontend Development", "Fast, responsive React applications."],
              ["UI Systems", "Reusable components that scale."],
            ].map(([t, d]) => (
              <article>
                <h3>{t}</h3>
                <p>{d}</p>
                <span>Learn more →</span>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="work">
          <p>SELECTED WORK</p>
          <h2>Designed for real people and real business goals.</h2>
        </section>
        <section id="contact" className="contact">
          <h2>Have an idea?</h2>
          <p>Let's turn it into a useful digital product.</p>
          <button>hello@novastudio.dev</button>
        </section>
      </main>
      <footer>A responsive business landing page built with React.</footer>
    </>
  );
}
