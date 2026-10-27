"use client";

import { useEffect, useState } from "react";

export default function Header({ name }: { name: string }) {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowName(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      <a href="#top" className={showName ? "header-name show" : "header-name"}>
        {name}
        <span className="header-line" />
      </a>
      <nav>
        <ul className="nav-list">
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#work" className="nav-link">Work</a></li>
          <li className="desktop-only"><a href="#education" className="nav-link">Education</a></li>
          <li className="desktop-only"><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
