import SelectedWork from "./sections/SelectedWork";
import "./App.css";
import "./App.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <a className="brand" href="#main">
            Khoa Vo<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="https://www.linkedin.com/in/khoavo95/">LinkedIn</a>
            <a href="mailto:khoavo.1895@gmail.com">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main" className="container">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <p className="eyebrow">MOBILE SOFTWARE ENGINEER · SINGAPORE</p>

          <h1 id="hero-title">
            Hi, I’m Khoa.
            <span>I build cross-platform applications.</span>
          </h1>

          <p className="hero-description">
            With 8+ years of software engineering experience, I’ve worked on
            digital identity and collaboration products using Flutter and React
            Native—from implementation and testing to production support.
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

            <a
              className="button button-secondary"
              href="mailto:khoavo.1895@gmail.com"
            >
              Get in touch
            </a>
          </div>

          <p className="hero-background">
            Previously at <strong>Affinidi</strong> and <strong>Padlet</strong>
          </p>
        </section>
        <SelectedWork />
      </main>
    </>
  );
}

export default App;
