import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["services", "work", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        const visibleSection = [...visibleSections.values()].sort(
          (first, second) => second.intersectionRatio - first.intersectionRatio,
        )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        } else {
          setActiveSection("");
        }
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.5, 1] },
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
