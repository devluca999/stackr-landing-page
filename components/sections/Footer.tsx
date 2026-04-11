"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 48px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: "linear-gradient(135deg, #FF3D00, #FFC700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 11 }}>S</span>
        </div>
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", color: "var(--text)" }}>STACKR</span>
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy", "Terms", "Contact"].map(l => (
          <a key={l} href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>{l}</a>
        ))}
      </div>
      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} STACKr. All rights reserved.
      </p>
    </footer>
  );
}
