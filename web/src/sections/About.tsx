import "./About.css";

export default function About() {
  return (
    <section id="about" className="hero" aria-labelledby="about-title">
      <p className="eyebrow">MOBILE SOFTWARE ENGINEER · SINGAPORE</p>

      <h1 id="about-title">
        Hi, I’m Khoa.
        <span>I build cross-platform applications.</span>
      </h1>

      <p className="hero-description">
        With 8+ years of software engineering experience, I’ve worked on digital
        identity and collaboration products using Flutter and React Native—from
        implementation and testing to production support.
      </p>

      <div className="hero-actions">
        <a
          className="button button-primary"
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View résumé
        </a>

        <a className="button button-secondary" href="#contact">
          Get in touch
        </a>
      </div>

      <p className="hero-background">
        Previously at <strong>Affinidi</strong> and <strong>Padlet</strong>
      </p>
    </section>
  );
}
