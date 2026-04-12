"use client";
import { useState, useEffect } from "react";
import CompoundLogoWeb from "../ui/CompoundLogoWeb";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("stackr-theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("stackr-theme", next ? "dark" : "light");
  };

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", alignItems:"center",
      justifyContent:"space-between", padding:"0 48px", height:68,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition:"all 0.3s" }}>

      <a href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
        <CompoundLogoWeb size={30} id="nav-logo" />
        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:16, letterSpacing:"0.1em", color:"var(--text)" }}>STACKR</span>
      </a>

      <div style={{ display:"flex", alignItems:"center", gap:32 }}>
        {[["#features","Features"],["#stacks","Stacks"],["#pricing","Pricing"],["peptides","Compounds"],["glossary","Glossary"]].map(([h,l]) => (
          <a key={l} href={h.startsWith("#") ? h : `/${h}`}
            style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="var(--text)")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--text-muted)")}>{l}</a>
        ))}
        <button onClick={toggleTheme} aria-label="Toggle theme"
          style={{ background:"var(--surface-2)", border:"1px solid var(--border)", borderRadius:8, padding:"6px 10px", cursor:"pointer", fontSize:15, transition:"all 0.2s", display:"flex", alignItems:"center", color:"var(--text-secondary)" }}>
          {dark ? "☀️" : "🌙"}
        </button>
        <a href="#waitlist" className="btn-flame" style={{ padding:"9px 22px" }}>Join Waitlist</a>
      </div>
    </nav>
  );
}
