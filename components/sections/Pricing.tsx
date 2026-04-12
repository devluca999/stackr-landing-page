"use client";
import { useState } from "react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started and explore the network.",
    cta: "Download Free",
    ctaHref: "#waitlist",
    highlight: false,
    badge: null,
    yearly: null,
    features: [
      "1 active stack",
      "Browse public stacks",
      "Clone up to 3 stacks",
      "Basic compound library",
      "Community access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.99",
    period: "per month",
    desc: "For serious optimizers. Everything, unlimited.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "#waitlist",
    highlight: true,
    badge: "Most Popular",
    yearly: "$59.99/yr — save 50%",
    features: [
      "Unlimited stacks",
      "Full tracking & analytics",
      "Unlimited cloning & remixing",
      "AI protocol suggestions",
      "Priority compound data",
      "Shareable protocol cards",
      "7-day free trial included",
    ],
  },
  {
    id: "early",
    name: "Early Optimizer",
    price: "$4.99",
    period: "/mo forever",
    desc: "Founding member rate. Locked permanently.",
    cta: "Claim Your Spot →",
    ctaHref: "#waitlist",
    highlight: false,
    badge: "⚡ Limited Spots",
    yearly: null,
    features: [
      "Everything in Pro",
      "Early Optimizer badge",
      "Direct product input",
      "Lifetime rate lock",
      "Early feature access",
    ],
  },
];

const COMPARE = [
  { label:"Active stacks",         free:"1",    pro:"Unlimited" },
  { label:"Stack cloning",         free:"3",    pro:"Unlimited" },
  { label:"Compound library",      free:"✓",    pro:"✓" },
  { label:"Daily tracking",        free:"✓",    pro:"✓" },
  { label:"Journal & insights",    free:"—",    pro:"✓" },
  { label:"Share cards",           free:"—",    pro:"✓" },
  { label:"Protocol timeline",     free:"—",    pro:"✓" },
  { label:"Remix tracking",        free:"—",    pro:"✓" },
  { label:"Compound scanner",      free:"—",    pro:"Soon" },
];

export default function Pricing() {
  const [showCompare, setShowCompare] = useState(false);

  return (
    <section style={{ padding:"120px 48px", maxWidth:1100, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:72 }}>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Pricing</p>
        <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
          Simple pricing.<br/><span className="flame-text">No BS.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", maxWidth:380, margin:"16px auto 0", lineHeight:1.65 }}>
          Start free. Upgrade when you&apos;re ready. Cancel any time.
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18, alignItems:"start" }}>
        {PLANS.map((p) => (
          <div key={p.id} style={{
            padding:"32px 28px",
            borderRadius:20,
            position:"relative",
            // Glass treatment — theme-aware
            background: p.highlight
              ? "var(--surface)"
              : "var(--surface)",
            border: p.highlight
              ? "1px solid rgba(255,106,0,0.4)"
              : "1px solid var(--border)",
            boxShadow: p.highlight
              ? "0 0 80px rgba(255,100,0,0.12), 0 20px 60px rgba(0,0,0,0.15)"
              : "var(--shadow-card)",
          }}>
            {/* Badge */}
            {p.badge && (
              <div style={{
                position:"absolute", top:-13, left:"50%", transform:"translateX(-50%)",
                padding:"4px 16px", borderRadius:20,
                background: p.highlight ? "var(--gradient-h)" : "rgba(255,61,0,0.9)",
                fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:11,
                color:"white", letterSpacing:"0.06em", whiteSpace:"nowrap",
                boxShadow:"0 4px 12px rgba(255,61,0,0.3)",
              }}>{p.badge}</div>
            )}

            {/* Header */}
            <div style={{ marginBottom:24 }}>
              <div className="font-display" style={{
                fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase",
                marginBottom:12,
                color: p.highlight ? "var(--flame-2)" : "var(--text-muted)",
              }}>{p.name}</div>

              <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:4 }}>
                <span className="font-display" style={{ fontWeight:800, fontSize:44, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1 }}>{p.price}</span>
                <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)" }}>{p.period}</span>
              </div>

              {p.yearly && (
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--flame-3)", marginBottom:8, fontWeight:500 }}>
                  {p.yearly}
                </div>
              )}

              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.6 }}>{p.desc}</p>
            </div>

            {/* CTA button */}
            <a
              href={p.ctaHref}
              className={p.highlight ? "btn-flame" : "btn-ghost"}
              style={{
                width:"100%", padding:"14px 20px", marginBottom:24,
                display:"block", textAlign:"center",
                fontSize:14, fontWeight:700,
                // For early optimizer — special treatment
                ...(p.id === "early" ? {
                  background:"linear-gradient(135deg,#FF3D00,#FF6A00)",
                  color:"white",
                  border:"none",
                  borderRadius:10,
                } : {}),
              }}>
              {p.cta}
            </a>

            {/* Features */}
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {p.features.map(f => (
                <div key={f} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ color:"var(--flame-2)", fontSize:14, fontWeight:700, flexShrink:0, lineHeight:1.4 }}>✓</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Trial note for Pro */}
            {p.id === "pro" && (
              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginTop:20, textAlign:"center" }}>
                No credit card required to start trial
              </p>
            )}

            {/* Spots counter for Early */}
            {p.id === "early" && (
              <div style={{ marginTop:16, padding:"10px 14px", borderRadius:10, background:"rgba(255,61,0,0.06)", border:"1px solid rgba(255,61,0,0.15)", textAlign:"center" }}>
                <p style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--flame-2)" }}>
                  ⚡ Limited founding spots — never increases
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Compare toggle */}
      <div style={{ textAlign:"center", marginTop:40 }}>
        <button
          onClick={() => setShowCompare(v => !v)}
          style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", background:"none", border:"none", cursor:"pointer", textDecoration:"underline", textUnderlineOffset:3 }}>
          {showCompare ? "Hide" : "Compare all plans"} ↓
        </button>
      </div>

      {/* Comparison table */}
      {showCompare && (
        <div style={{ marginTop:32, borderRadius:16, overflow:"hidden", border:"1px solid var(--border)" }}>
          {/* Header */}
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", background:"var(--surface-2)", padding:"12px 20px", borderBottom:"1px solid var(--border)" }}>
            <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)" }}>Feature</span>
            <span style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--text-muted)", textAlign:"center" }}>Free</span>
            <span style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--flame-2)", textAlign:"center" }}>Pro</span>
          </div>
          {COMPARE.map((row, i) => (
            <div key={row.label} style={{
              display:"grid", gridTemplateColumns:"2fr 1fr 1fr",
              padding:"12px 20px",
              background: i % 2 === 0 ? "var(--surface)" : "var(--surface-2)",
              borderBottom: i < COMPARE.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)" }}>{row.label}</span>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", textAlign:"center" }}>{row.free}</span>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color: row.pro === "✓" ? "var(--flame-2)" : row.pro === "—" ? "var(--text-muted)" : "var(--flame-3)", textAlign:"center", fontWeight: row.pro === "✓" ? "600" : "400" }}>{row.pro}</span>
            </div>
          ))}
        </div>
      )}

      <p style={{ textAlign:"center", fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", marginTop:32 }}>
        All Pro plans include a 7-day free trial. Cancel any time. No surprises.
      </p>
    </section>
  );
}
