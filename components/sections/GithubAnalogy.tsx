"use client";

const pairs = [
  { left: "Repository", right: "Stack", desc: "A versioned, shareable collection" },
  { left: "Fork", right: "Clone", desc: "Copy and adapt for your biology" },
  { left: "Commit", right: "Protocol Update", desc: "Iterate on what you learn" },
  { left: "Stars", right: "Clones", desc: "Community validation" },
];

export default function GithubAnalogy() {
  return (
    <section style={{ padding: "120px 48px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", color: "var(--flame-2)", textTransform: "uppercase", marginBottom: 16 }}>Mental Model</div>
      <h2 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
        GitHub for your body
      </h2>
      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "var(--text-secondary)", marginBottom: 64, maxWidth: 480, margin: "0 auto 64px" }}>
        Protocols work like repositories. The network gets smarter every time someone shares a stack.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
        {pairs.map((p, i) => (
          <div key={i} style={{ padding: "28px 20px", borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "var(--text-muted)" }}>{p.left}</span>
              <span style={{ color: "var(--flame-2)", fontWeight: 700 }}>→</span>
              <span className="flame-text font-display" style={{ fontWeight: 700, fontSize: 14 }}>{p.right}</span>
            </div>
            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
