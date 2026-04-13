"use client";

const STEPS = [
  { num:"01", tag:"Create", title:"Build your protocol", desc:"Pick your compounds from our library of 200+ peptides, nootropics, vitamins, and adaptogens. Set dosages, timing, and cycling windows — then you're live." },
  { num:"02", tag:"Track", title:"See what actually works", desc:"Daily check-ins take 60 seconds. Log energy, sleep, focus, recovery. Over time, the patterns tell you exactly which compounds are moving your numbers." },
  { num:"03", tag:"Share", title:"Share your stack", desc:"Publish your protocol. The community can clone it, adapt it to their body, and tell you what they found. Your stack gets smarter with every user." },
  { num:"04", tag:"Discover", title:"Find elite protocols", desc:"Browse the Wolverine Recovery stack, Bryan Johnson's Blueprint, Huberman's morning routine — all structured and ready to clone in one tap." },
];

export default function HowItWorks() {
  return (
    <section id="features" style={{ padding:"80px 48px", maxWidth:1100, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:72 }}>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>How It Works</p>
        <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
          Four steps to a<br/><span className="flame-text">fully optimized you</span>
        </h2>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))", gap:20 }}>
        {STEPS.map((s,i) => (
          <div key={i} className="card-base" style={{ padding:"28px 24px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
              <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:11, letterSpacing:"0.1em", color:"var(--flame-2)", padding:"3px 10px", borderRadius:20, background:"rgba(255,106,0,0.1)", border:"1px solid rgba(255,106,0,0.15)" }}>{s.tag}</span>
              <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:28, color:"var(--surface-3)" }}>{s.num}</span>
            </div>
            <h3 className="font-display" style={{ fontWeight:700, fontSize:18, color:"var(--text)", marginBottom:10, letterSpacing:"-0.02em" }}>{s.title}</h3>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, lineHeight:1.72, color:"var(--text-secondary)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign:"center", marginTop:56 }}>
        <a href="#waitlist" className="btn-flame" style={{ padding:"14px 40px", fontSize:15 }}>Start optimizing now →</a>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)", marginTop:12 }}>Free to start · No credit card required</p>
      </div>
    </section>
  );
}
