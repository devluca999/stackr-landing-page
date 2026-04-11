"use client";
import { useState } from "react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) setSubmitted(true); };
  return (
    <section style={{ padding: "120px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,106,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
        <div className="flame-text font-display" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Early Access</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
          Start optimizing<br />your protocol
        </h2>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 48 }}>
          Join the waitlist. Early adopters get founding member status, unlimited stacks, and direct input into what we build next.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ flex: 1, minWidth: 220, padding: "14px 18px" }} />
            <button type="submit" className="btn-flame" style={{ padding: "14px 32px" }}>Get Early Access</button>
          </form>
        ) : (
          <div className="flame-border" style={{ display: "inline-block", padding: "18px 40px", borderRadius: 12 }}>
            <span className="flame-text font-display" style={{ fontWeight: 700, fontSize: 18 }}>You&apos;re on the list. 🔥</span>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 48 }}>
          {[["10k+", "Waitlist"], ["500+", "Protocols ready"], ["40+", "Compounds"]].map(([n, l]) => (
            <div key={l}>
              <div className="flame-text font-display" style={{ fontWeight: 800, fontSize: 28 }}>{n}</div>
              <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
