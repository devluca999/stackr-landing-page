"use client";
import ThemeToggle from "../ui/ThemeToggle";

export default function Nav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #FF3D00, #FFC700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 13 }}>S</span>
        </div>
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "0.08em", color: "var(--text)" }}>STACKR</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <a href="#features" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Features</a>
        <a href="#community" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Community</a>
        <ThemeToggle />
        <a href="#waitlist" className="btn-flame" style={{ padding: "8px 20px", textDecoration: "none" }}>
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
