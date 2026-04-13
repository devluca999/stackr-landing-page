"use client";
import { useState, useEffect } from "react";
import CompoundLogoWeb from "../ui/CompoundLogoWeb";

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [dark, setDark]           = useState(true);
  const [menuOpen, setMenuOpen]   = useState(false);

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

  // All primary nav items are anchor-based (single page experience)
  const NAV_LINKS = [
    { href:"#features",  label:"How It Works" },
    { href:"#stacks",    label:"Stacks" },
    { href:"#compounds", label:"Compounds" },
    { href:"#tracking",  label:"Progress" },
    { href:"#pricing",   label:"Pricing" },
  ];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:50,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"0 48px", height:68,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition:"all 0.3s",
    }}>

      <a href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
        <CompoundLogoWeb size={28} id="nav-logo" />
        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:15, letterSpacing:"0.12em", color:"var(--text)" }}>STACKR</span>
      </a>

      {/* Desktop links */}
      <div style={{ display:"flex", alignItems:"center", gap:28 }}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={label} href={href}
            style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
            {label}
          </a>
        ))}
        <button onClick={toggleTheme} aria-label="Toggle theme"
          style={{ background:"var(--surface-2)", border:"1px solid var(--border)", borderRadius:8, padding:"6px 10px", cursor:"pointer", fontSize:14, color:"var(--text-secondary)", transition:"all 0.2s" }}>
          {dark ? "☀️" : "🌙"}
        </button>
        <a href="#waitlist" className="btn-flame" style={{ padding:"9px 22px" }}>Join Waitlist</a>
      </div>
    </nav>
  );
}
