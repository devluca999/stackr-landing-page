"use client";
import { useState, useEffect, useRef } from "react";

const SPOTS_LEFT = 247; // visual urgency — update before launch

const PLANS = {
  monthly: [
    { id:"free", name:"Free", price:"$0", period:"forever", priceYearly:null, desc:"Get started and explore the network.", cta:"Download Free", highlight:false, badge:null, features:["1 active stack","Browse public stacks","Clone up to 3 stacks","Basic compound library","Community access"] },
    { id:"pro", name:"Pro", price:"$9.99", period:"/month", priceYearly:"$5.00", desc:"For serious optimizers. Everything, unlimited.", cta:"Start 7-Day Free Trial", highlight:true, badge:"Most Popular", features:["Unlimited stacks","Full tracking & analytics","Unlimited cloning & remixing","AI protocol suggestions","Priority compound data","Shareable protocol cards","7-day free trial included"] },
    { id:"early", name:"Early Optimizer", price:"$4.99", period:"/month forever", priceYearly:null, desc:"Founding member rate. Locked permanently. Never goes up.", cta:"Claim Your Spot →", highlight:false, badge:"⚡ Limited", features:["Everything in Pro","Early Optimizer badge","Direct product input","Lifetime rate lock","Early feature access"] },
  ],
  yearly: [
    { id:"free", name:"Free", price:"$0", period:"forever", priceYearly:null, desc:"Get started and explore the network.", cta:"Download Free", highlight:false, badge:null, features:["1 active stack","Browse public stacks","Clone up to 3 stacks","Basic compound library","Community access"] },
    { id:"pro", name:"Pro", price:"$59.99", period:"/year", priceYearly:"$5.00", desc:"Best value — 2 months free. Everything, unlimited.", cta:"Start 7-Day Free Trial", highlight:true, badge:"Best Value", features:["Unlimited stacks","Full tracking & analytics","Unlimited cloning & remixing","AI protocol suggestions","Priority compound data","Shareable protocol cards","7-day free trial included","2 months free vs monthly"] },
    { id:"early", name:"Early Optimizer", price:"$4.99", period:"/month forever", priceYearly:null, desc:"Founding member rate. Locked permanently. Never goes up.", cta:"Claim Your Spot →", highlight:false, badge:"⚡ Limited", features:["Everything in Pro","Early Optimizer badge","Direct product input","Lifetime rate lock","Early feature access"] },
  ],
};

const COMPARE = [
  { label:"Active stacks",      free:"1",   pro:"Unlimited" },
  { label:"Stack cloning",      free:"3",   pro:"Unlimited" },
  { label:"Compound library",   free:"✓",   pro:"✓" },
  { label:"Daily tracking",     free:"✓",   pro:"✓" },
  { label:"Journal & insights", free:"—",   pro:"✓" },
  { label:"Share cards",        free:"—",   pro:"✓" },
  { label:"Protocol timeline",  free:"—",   pro:"✓" },
  { label:"Remix tracking",     free:"—",   pro:"✓" },
  { label:"Compound scanner",   free:"—",   pro:"Soon" },
];

export default function Pricing() {
  const [billing, setBilling]     = useState<"monthly"|"yearly">("monthly");
  const [showCompare, setShowCompare] = useState(false);
  const plans = PLANS[billing];

  return (
    <section style={{ padding:"120px 48px", maxWidth:1100, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:56 }}>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Pricing</p>
        <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
          Simple pricing.<br/><span className="flame-text">No BS.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", maxWidth:380, margin:"16px auto 24px", lineHeight:1.65 }}>
          Start free. Upgrade when you&apos;re ready. Cancel any time.
        </p>

        {/* Billing toggle */}
        <div style={{ display:"inline-flex", alignItems:"center", background:"var(--surface-2)", borderRadius:40, padding:4, border:"1px solid var(--border)", gap:2 }}>
          <button onClick={()=>setBilling("monthly")} style={{
            fontFamily:"Syne,sans-serif", fontWeight:600, fontSize:13, padding:"8px 20px", borderRadius:36, border:"none", cursor:"pointer", transition:"all 0.2s",
            background: billing==="monthly" ? "var(--gradient-h)" : "transparent",
            color: billing==="monthly" ? "white" : "var(--text-muted)",
            boxShadow: billing==="monthly" ? "0 4px 16px rgba(255,100,0,0.3)" : "none",
          }}>Monthly</button>
          <button onClick={()=>setBilling("yearly")} style={{
            fontFamily:"Syne,sans-serif", fontWeight:600, fontSize:13, padding:"8px 20px", borderRadius:36, border:"none", cursor:"pointer", transition:"all 0.2s", position:"relative",
            background: billing==="yearly" ? "var(--gradient-h)" : "transparent",
            color: billing==="yearly" ? "white" : "var(--text-muted)",
            boxShadow: billing==="yearly" ? "0 4px 16px rgba(255,100,0,0.3)" : "none",
          }}>
            Yearly
            {billing!=="yearly" && <span style={{ position:"absolute", top:-10, right:-4, background:"#22c55e", color:"white", fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:10, whiteSpace:"nowrap" }}>-50%</span>}
          </button>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18, alignItems:"start" }}>
        {plans.map((p) => (
          <div key={p.id} style={{
            padding:"32px 28px", borderRadius:20, position:"relative",
            background: p.id==="early" ? "linear-gradient(135deg,rgba(255,61,0,0.06),rgba(255,106,0,0.02))" : "var(--surface)",
            border: p.highlight ? "1px solid rgba(255,106,0,0.4)" : p.id==="early" ? "1px solid rgba(255,61,0,0.25)" : "1px solid var(--border)",
            boxShadow: p.highlight ? "0 0 80px rgba(255,100,0,0.12), 0 20px 60px rgba(0,0,0,0.15)" : "var(--shadow-card)",
          }}>
            {p.badge && (
              <div style={{ position:"absolute", top:-13, left:"50%", transform:"translateX(-50%)", padding:"4px 16px", borderRadius:20, background: p.highlight ? "var(--gradient-h)" : "rgba(255,61,0,0.9)", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:11, color:"white", letterSpacing:"0.06em", whiteSpace:"nowrap", boxShadow:"0 4px 12px rgba(255,61,0,0.3)" }}>{p.badge}</div>
            )}

            <div style={{ marginBottom:24 }}>
              <div className="font-display" style={{ fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:12, color: p.highlight ? "var(--flame-2)" : p.id==="early" ? "var(--flame-3)" : "var(--text-muted)" }}>{p.name}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:4 }}>
                <span className="font-display" style={{ fontWeight:800, fontSize:44, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1 }}>{p.price}</span>
                <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)" }}>{p.period}</span>
              </div>
              {billing==="yearly" && p.id==="pro" && (
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"#22c55e", fontWeight:600, marginBottom:6 }}>≈ $5.00/month · 2 months free</div>
              )}
              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.6 }}>{p.desc}</p>
            </div>

            <a href="#waitlist" className={p.highlight ? "btn-flame" : "btn-ghost"}
              style={{ width:"100%", padding:"14px 20px", marginBottom:24, display:"block", textAlign:"center", fontSize:14, fontWeight:700,
                ...(p.id==="early" ? { background:"linear-gradient(135deg,#FF3D00,#FF6A00)", color:"white", border:"none", borderRadius:10 } : {}),
              }}>{p.cta}</a>

            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {p.features.map(f => (
                <div key={f} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ color:"var(--flame-2)", fontSize:14, fontWeight:700, flexShrink:0, lineHeight:1.4 }}>✓</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {p.id==="pro" && <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginTop:20, textAlign:"center" }}>No credit card required to start trial</p>}

            {/* Early Optimizer urgency block */}
            {p.id==="early" && (
              <div style={{ marginTop:16 }}>
                <div style={{ padding:"12px 14px", borderRadius:10, background:"rgba(255,61,0,0.08)", border:"1px solid rgba(255,61,0,0.2)" }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--flame-1)" }}>⚡ Founding spots remaining</span>
                    <span style={{ fontFamily:"Syne,sans-serif", fontSize:14, fontWeight:800, color:"var(--flame-2)" }}>{SPOTS_LEFT}</span>
                  </div>
                  {/* Progress bar */}
                  <div style={{ height:4, borderRadius:999, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${100-(SPOTS_LEFT/500*100)}%`, background:"linear-gradient(90deg,#FF3D00,#FF6A00,#FFC700)", borderRadius:999 }}/>
                  </div>
                  <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginTop:8, textAlign:"center" }}>
                    This price is locked — Pro will be $9.99/mo after launch
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign:"center", marginTop:40 }}>
        <button onClick={()=>setShowCompare(v=>!v)} style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", background:"none", border:"none", cursor:"pointer", textDecoration:"underline", textUnderlineOffset:3 }}>
          {showCompare ? "Hide" : "Compare all plans"} ↓
        </button>
      </div>

      {showCompare && (
        <div style={{ marginTop:32, borderRadius:16, overflow:"hidden", border:"1px solid var(--border)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", background:"var(--surface-2)", padding:"12px 20px", borderBottom:"1px solid var(--border)" }}>
            <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)" }}>Feature</span>
            <span style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--text-muted)", textAlign:"center" }}>Free</span>
            <span style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:700, color:"var(--flame-2)", textAlign:"center" }}>Pro</span>
          </div>
          {COMPARE.map((row,i) => (
            <div key={row.label} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", padding:"12px 20px", background: i%2===0 ? "var(--surface)" : "var(--surface-2)", borderBottom: i<COMPARE.length-1 ? "1px solid var(--border)" : "none" }}>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)" }}>{row.label}</span>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", textAlign:"center" }}>{row.free}</span>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color: row.pro==="✓" ? "var(--flame-2)" : row.pro==="—" ? "var(--text-muted)" : "var(--flame-3)", textAlign:"center", fontWeight: row.pro==="✓" ? "600" : "400" }}>{row.pro}</span>
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
