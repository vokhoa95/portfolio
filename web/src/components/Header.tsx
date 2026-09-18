import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="brand" href="#about">
          Khoa Vo<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">My Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
