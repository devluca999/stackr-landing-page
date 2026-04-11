const features = [
  { icon: "⬡", title: "Structured Stacks", desc: "Build protocols with compounds, dosages, timing, and cycling windows. No more scattered spreadsheets or Notion docs." },
  { icon: "◈", title: "Effect Tracking", desc: "Log results against your stack over time. Correlate compound changes with outcomes and optimize with data." },
  { icon: "⇄", title: "Clone & Fork", desc: "Like GitHub repos — clone any public stack, adapt it to your biology, and publish your version back to the network." },
  { icon: "▦", title: "Protocol Network", desc: "A living ecosystem of human optimization knowledge. Discover what's working for thousands of biohackers." },
  { icon: "◉", title: "Activation Timeline", desc: "Visualize when each compound in your stack activates throughout the day. Optimize your biological operating system." },
  { icon: "⬟", title: "Compound Library", desc: "Structured data on peptides, nootropics, adaptogens, hormones, and vitamins — with mechanisms and research links." },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "120px 48px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", color: "var(--flame-2)", textTransform: "uppercase", marginBottom: 16 }}>How It Works</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Infrastructure for<br />self-directed optimization
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {features.map((f, i) => (
          <div key={i} className="card-hover" style={{ padding: "32px 28px", borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: 28, marginBottom: 16, color: "var(--flame-2)" }}>{f.icon}</div>
            <div className="font-display" style={{ fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 10 }}>{f.title}</div>
            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
