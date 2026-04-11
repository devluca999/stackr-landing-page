"use client";

export default function Footer() {
  return (
    <footer style={{ padding:"40px 48px", borderTop:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polygon points="12,1 23,6.5 23,17.5 12,23 1,17.5 1,6.5" fill="url(#fg)"/>
          <text x="12" y="16" textAnchor="middle" fill="white" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="10">S</text>
          <defs><linearGradient id="fg" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#FF3D00"/><stop offset="100%" stopColor="#FFC700"/></linearGradient></defs>
        </svg>
        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:14, letterSpacing:"0.1em", color:"var(--text)" }}>STACKR</span>
      </div>
      <div style={{ display:"flex", gap:28 }}>
        {["Privacy","Terms","Contact","Twitter"].map(l=>(
          <a key={l} href="#" style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="var(--text)")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--text-muted)")}>{l}</a>
        ))}
      </div>
      <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)" }}>
        © {new Date().getFullYear()} STACKr. Optimize everything.
      </p>
    </footer>
  );
}
