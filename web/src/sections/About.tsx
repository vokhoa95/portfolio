import "./About.css";

export default function About() {
  return (
    <section id="about" className="hero" aria-labelledby="about-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-intro">Hi, friend. My name is</p>

          <h1 id="about-title">Khoa <span>Vo</span></h1>

          <p className="hero-role">I am a Mobile Developer.</p>

          <p className="hero-description">
            I like figuring things out and making everyday things a little
            easier.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>

            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <p className="hero-greeting">
            Hi there!
            <br />
            Hope you’re having a great day!
          </p>
          <div className="hero-photo-frame">
            <img
              className="hero-photo"
              src={`${import.meta.env.BASE_URL}khoa-portrait.jpeg`}
              alt="Khoa enjoying an ice cream outdoors."
              width={2316}
              height={3088}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
