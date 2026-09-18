import { useState } from "react";
import { experiences } from "../data/experience";
import LearningTrail from "../components/LearningTrail";
import "./Experience.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const experience = experiences[activeIndex];

  function changeSlide(direction: number) {
    setSlideDirection(direction);
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
          data-direction={slideDirection > 0 ? "next" : slideDirection < 0 ? "previous" : undefined}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="journey-copy" key={`copy-${activeIndex}`}>
            <p className="journey-period">{experience.period}</p>
            <h3>{experience.company}</h3>
            <p className="journey-role">
              {experience.role} · {experience.location}
            </p>
            <p className="journey-description">{experience.description}</p>
          </div>

          <div className="journey-skills-column">
          <LearningTrail />
          <div className="journey-skills" key={`skills-${activeIndex}`}>
            <h3>Skills I picked up along the way</h3>
            <div
              className="journey-skills-scroll"
              tabIndex={0}
              role="region"
              aria-label={`Skills at ${experience.company}`}
            >
            {experience.skills.map((group) => (
              <div className="journey-skill-group" key={group.category}>
                <h4>{group.category}</h4>
                <ul className="journey-skill-list" aria-label={group.category}>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>
          </div>
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
