import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer container">
      <a href="#about">Design by Khoa Vo</a>
      <span aria-hidden="true">•</span>
      <a
        href="https://github.com/vokhoa95/portfolio/commits/main"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Updated 18 September 2026 — view commit history (opens in a new tab)"
      >
        Updated <time dateTime="2026-09-18">18 Sep 2026</time>
      </a>
    </footer>
  );
}
