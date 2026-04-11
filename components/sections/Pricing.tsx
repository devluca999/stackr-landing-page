"use client";

const PLANS = [
  {
    name:"Free", price:"$0", period:"forever", desc:"Get started and explore the network.",
    cta:"Download Free", highlight:false,
    features:["1 active stack","Browse public stacks","Clone up to 3 stacks","Basic compound library","Community access"],
  },
  {
    name:"Pro", price:"$9.99", period:"per month", desc:"For serious optimizers. Everything, unlimited.",
    cta:"Join Waitlist → Pro", highlight:true, badge:"Most Popular",
    yearly:"$59.99/yr — save 50%",
    features:["Unlimited stacks","Full tracking & analytics","Unlimited cloning","AI protocol suggestions","Priority compound data","Export & share anywhere","7-day free trial"],
  },
  {
    name:"Founder", price:"$4.99", period:"per month, locked forever", desc:"Early adopter rate. Never goes up.",
    cta:"Claim Founder Spot", highlight:false, badge:"Limited",
    features:["Everything in Pro","Founder badge on profile","Direct product input","Lifetime rate lock","Early feature access"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding:"120px 48px", maxWidth:1100, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:72 }}>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Pricing</p>
        <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
          Simple pricing.<br/><span className="flame-text">No BS.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", marginTop:16, maxWidth:380, margin:"16px auto 0" }}>
          Start free. Upgrade when you&apos;re ready. Cancel any time.
        </p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18, alignItems:"start" }}>
        {PLANS.map((p,i) => (
          <div key={i} style={{ padding:"32px 28px", borderRadius:18, background: p.highlight ? "var(--surface)" : "var(--surface)", border: p.highlight ? "1px solid rgba(255,106,0,0.35)" : "1px solid var(--border)", position:"relative", boxShadow: p.highlight ? "0 0 60px rgba(255,100,0,0.1)" : "none" }}>
            {p.badge && <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", padding:"4px 16px", borderRadius:20, background:"var(--gradient-h)", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:11, color:"white", letterSpacing:"0.06em", whiteSpace:"nowrap" }}>{p.badge}</div>}
            <div style={{ marginBottom:24 }}>
              <div className="font-display" style={{ fontWeight:700, fontSize:15, color:p.highlight?"var(--flame-3)":"var(--text-muted)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:10 }}>{p.name}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:4 }}>
                <span className="font-display" style={{ fontWeight:800, fontSize:42, color:"var(--text)", letterSpacing:"-0.03em" }}>{p.price}</span>
                <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)" }}>{p.period}</span>
              </div>
              {p.yearly && <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--flame-3)", marginBottom:6 }}>{p.yearly}</div>}
              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.6 }}>{p.desc}</p>
            </div>
            <a href="#waitlist" className={p.highlight ? "btn-flame" : "btn-ghost"} style={{ width:"100%", padding:"13px 20px", marginBottom:24, display:"block", textAlign:"center" }}>{p.cta}</a>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {p.features.map(f=>(
                <div key={f} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span className="flame-text" style={{ fontSize:14, fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign:"center", fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)", marginTop:32 }}>
        All plans include a 7-day free trial on Pro. No credit card required to join the waitlist.
      </p>
    </section>
  );
}
