const STACKS = [
  { name: "Morning Cognitive Protocol", author: "attia_longevity", compounds: 7, clones: 3841, tags: ["focus", "neuroprotection"] },
  { name: "Sleep + Recovery Stack", author: "biohack_daily", compounds: 5, clones: 2219, tags: ["sleep", "recovery"] },
  { name: "Testosterone Optimization", author: "primal_protocol", compounds: 9, clones: 1876, tags: ["hormones", "performance"] },
  { name: "Longevity Senolytic", author: "age_less_lab", compounds: 6, clones: 4102, tags: ["longevity", "autophagy"] },
  { name: "Peptide Cutting Stack", author: "peptide_pro", compounds: 4, clones: 988, tags: ["peptides", "fat loss"] },
  { name: "Neurohacking Foundations", author: "nootropix_", compounds: 8, clones: 2344, tags: ["nootropics", "BDNF"] },
];

export default function Community() {
  return (
    <section id="community" style={{ padding: "120px 48px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", color: "var(--flame-2)", textTransform: "uppercase", marginBottom: 16 }}>Protocol Network</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Built on shared<br />human knowledge
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "var(--text-secondary)", marginTop: 20, maxWidth: 480, margin: "20px auto 0" }}>
            Every stack published grows the network. Clone, fork, and improve what the community discovers.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {STACKS.map((s, i) => (
            <div key={i} className="card-hover" style={{ padding: "24px", borderRadius: 14, background: "var(--bg)", border: "1px solid var(--border)", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div>
                  <div className="font-display" style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 4 }}>{s.name}</div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)" }}>@{s.author}</div>
                </div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 12, fontWeight: 700, color: "var(--flame-2)" }}>{s.clones.toLocaleString()} clones</div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {Array.from({ length: s.compounds }).map((_, j) => (
                  <div key={j} style={{ flex: 1, height: 4, borderRadius: 2, background: `linear-gradient(90deg, #FF3D00 ${j * 15}%, #FFC700 100%)`, opacity: 0.7 + (j * 0.03) }} />
                ))}
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "var(--text-muted)", marginLeft: 4 }}>{s.compounds} compounds</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
