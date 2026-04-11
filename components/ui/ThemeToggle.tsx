"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (t === "dark") { setDark(true); document.documentElement.setAttribute("data-theme", "dark"); }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) { document.documentElement.setAttribute("data-theme", "dark"); localStorage.setItem("theme", "dark"); }
    else { document.documentElement.removeAttribute("data-theme"); localStorage.setItem("theme", "light"); }
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme"
      style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "var(--text-muted)", fontSize: 16, transition: "all 0.2s", display: "flex", alignItems: "center" }}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
