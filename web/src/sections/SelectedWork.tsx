import { projects } from "../data/projects";
import "./SelectedWork.css";

export default function SelectedWork() {
  return (
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <p className="eyebrow">SELECTED WORK</p>
      <h2 id="work-title">Projects and contributions</h2>

      <div className="project-list">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            aria-labelledby={`${project.id}-title`}
          >
            <p className="project-company">{project.company}</p>
            <h3 id={`${project.id}-title`}>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-outcome">{project.outcome}</p>

            <ul className="project-tags" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
