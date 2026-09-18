import { useState } from "react";
import { experiences } from "../data/experience";
import "./Experience.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const experience = experiences[activeIndex];

  function changeSlide(direction: number) {
    setActiveIndex(
      (current) =>
        (current + direction + experiences.length) % experiences.length,
    );
  }

  return (
    <section
      id="experience"
      className="journey"
      aria-labelledby="journey-title"
      aria-roledescription="carousel"
    >
      <div className="journey-heading">
        <h2 id="journey-title">My Journey</h2>
      </div>

      <div className="journey-carousel">
        <button
          type="button"
          className="journey-arrow journey-previous"
          aria-label="Previous company"
          aria-controls="journey-slide"
          onClick={() => changeSlide(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          id="journey-slide"
          className="journey-slide"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="journey-copy">
            <p className="journey-period">{experience.period}</p>
            <h3>{experience.company}</h3>
            <p className="journey-role">
              {experience.role} · {experience.location}
            </p>
            <p className="journey-description">{experience.description}</p>
          </div>

          <div className="journey-image" aria-hidden="true" />
        </div>

        <button
          type="button"
          className="journey-arrow journey-next"
          aria-label="Next company"
          aria-controls="journey-slide"
          onClick={() => changeSlide(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
