import { useLayoutEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="brand" href="#about">
          Khoa <span>Vo</span>
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
