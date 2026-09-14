const testimonials = [
  {
    quote: "The team transformed our idea into a product our customers actually enjoy using.",
    name: "Alex Morgan",
    role: "Product Lead",
    company: "Northstar Labs",
  },
  {
    quote: "WebCraft brought clarity to a complicated project and delivered an experience that feels effortless.",
    name: "Priya Shah",
    role: "Founder",
    company: "LocalBite",
  },
  {
    quote: "Their thoughtful process helped us launch faster without compromising on quality or detail.",
    name: "Jordan Lee",
    role: "Operations Director",
    company: "FitTrack",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <p className="tag">CLIENT NOTES</p>
      <h2>Good work feels better when it works for everyone.</h2>
      <div className="testimonial-grid">
        {testimonials.map(({ quote, name, role, company }) => (
          <article className="testimonial-card" key={name}>
            <blockquote>“{quote}”</blockquote>
            <footer>
              <strong>{name}</strong>
              <span>
                {role}, {company}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
