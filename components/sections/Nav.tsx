"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", alignItems:"center",
      justifyContent:"space-between", padding:"0 48px", height:68,
      background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition:"all 0.3s" }}>

      <a href="#" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="15,1.5 28,8.5 28,21.5 15,28.5 2,21.5 2,8.5" fill="url(#navgrad)"/>
          <text x="15" y="20" textAnchor="middle" fill="white" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="12">S</text>
          <defs><linearGradient id="navgrad" x1="0" y1="0" x2="30" y2="30"><stop offset="0%" stopColor="#FF3D00"/><stop offset="100%" stopColor="#FFC700"/></linearGradient></defs>
        </svg>
        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:16, letterSpacing:"0.1em", color:"var(--text)" }}>STACKR</span>
      </a>

      <div style={{ display:"flex", alignItems:"center", gap:36 }}>
        {[["#features","Features"],["#stacks","Stacks"],["#pricing","Pricing"]].map(([h,l]) => (
          <a key={l} href={h} style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="var(--text)")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--text-muted)")}>{l}</a>
        ))}
        <a href="#waitlist" className="btn-flame" style={{ padding:"9px 22px" }}>Join Waitlist</a>
      </div>
    </nav>
  );
}
