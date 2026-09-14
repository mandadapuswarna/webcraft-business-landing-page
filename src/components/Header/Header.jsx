import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["services", "work", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -60%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <b>WebCraft</b>
      <nav>
        <a className={activeSection === "services" ? "active" : ""} href="#services">
          Services
        </a>
        <a className={activeSection === "work" ? "active" : ""} href="#work">
          Work
        </a>
        <a className={activeSection === "contact" ? "active" : ""} href="#contact">
          Contact
        </a>
      </nav>
      <a className="button" href="#contact">
        Let's talk
      </a>
    </header>
  );
}
