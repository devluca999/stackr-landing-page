"use client";
import { useState } from "react";

const BADGES = ["Peptides", "Nootropics", "Longevity", "Adaptogens", "Hormones", "Vitamins"];

const SAMPLE_STACK = [
  { name: "BPC-157", dose: "250mcg", timing: "AM", color: "#FF3D00" },
  { name: "Semax", dose: "600mcg", timing: "AM", color: "#FF6A00" },
  { name: "NMN", dose: "500mg", timing: "AM", color: "#FF9E00" },
  { name: "Berberine", dose: "500mg", timing: "PM", color: "#FFC700" },
  { name: "Magnesium L-Threonate", dose: "2g", timing: "PM", color: "#FF9E00" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(255,106,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="animate-fade-in" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
        {BADGES.map(b => (
          <span key={b} style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", padding: "4px 12px", borderRadius: 20, background: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border)", textTransform: "uppercase" }}>{b}</span>
        ))}
      </div>
      <div style={{ textAlign: "center", maxWidth: 820, marginBottom: 28 }}>
        <h1 className="font-display animate-slide-up" style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--text)" }}>
          Your biology,<br /><span className="flame-text">operating system.</span>
        </h1>
      </div>
      <p className="animate-slide-up delay-200" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300, color: "var(--text-secondary)", textAlign: "center", maxWidth: 560, lineHeight: 1.65, marginBottom: 48 }}>
        Build structured protocols. Track compound effects. Share stacks with the community. The GitHub for human optimization.
      </p>
      <div className="animate-slide-up delay-300" id="waitlist" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "center", marginBottom: 64 }}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: "12px 18px", maxWidth: 280 }} />
            <button type="submit" className="btn-flame" style={{ padding: "12px 28px" }}>Join Waitlist →</button>
          </form>
        ) : (
          <div style={{ padding: "14px 32px", borderRadius: 10, background: "var(--surface)", border: "1px solid var(--border)" }}>
            <span className="flame-text font-display" style={{ fontWeight: 700, fontSize: 16 }}>You&apos;re in. We&apos;ll be in touch.</span>
          </div>
        )}
      </div>
      <div className="animate-slide-up delay-500 animate-float" style={{ width: "100%", maxWidth: 480, background: "var(--surface)", borderRadius: 16, border: "1px solid var(--border)", padding: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 4 }}>Longevity Protocol v2.1</div>
            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)" }}>by @huberman_protocol · 2.4k clones</div>
          </div>
          <button className="btn-flame" style={{ padding: "6px 14px", fontSize: 12 }}>Clone</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SAMPLE_STACK.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              <div style={{ flex: 1, fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{item.name}</div>
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)" }}>{item.dose}</span>
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "var(--surface-2)", color: item.timing === "AM" ? "#FF6A00" : "#888" }}>{item.timing}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
          <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>Activation Timeline</div>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            {["6am","8am","10am","12pm","2pm","4pm","6pm","8pm","10pm"].map((t, i) => (
              <div key={t} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: "100%", height: 6, borderRadius: 3, background: [0,1,2].includes(i) ? "linear-gradient(90deg, #FF3D00, #FF9E00)" : [6,7].includes(i) ? "linear-gradient(90deg, #FF9E00, #FFC700)" : "var(--surface-2)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 9, color: "var(--text-muted)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "var(--text-muted)", marginTop: 32 }}>Early access · Limited spots</p>
    </section>
  );
}
