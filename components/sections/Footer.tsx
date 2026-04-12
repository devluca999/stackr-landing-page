"use client";
import CompoundLogoWeb from "../ui/CompoundLogoWeb";

export default function Footer() {
  return (
    <footer style={{ padding:"40px 48px", borderTop:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <CompoundLogoWeb size={26} id="footer-logo" />
        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:14, letterSpacing:"0.1em", color:"var(--text)" }}>STACKR</span>
      </div>
      <div style={{ display:"flex", gap:28 }}>
        {[["Privacy","#"],["Terms","#"],["Contact","#"],["Compounds","/peptides"],["Glossary","/glossary"]].map(([l,h]) => (
          <a key={l} href={h} style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s" }}
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
