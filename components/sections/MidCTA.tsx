"use client";
import { WaitlistForm } from "./Hero";

const TICKER = ["Peptides","Nootropics","Longevity","Recovery","Sleep","Hormones","Adaptogens","Vitamins","Performance","Biohacking","Peptides","Nootropics","Longevity","Recovery","Sleep","Hormones","Adaptogens","Vitamins","Performance","Biohacking"];

export default function MidCTA() {
  return (
    <section style={{ padding:"100px 24px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:400, background:"radial-gradient(ellipse, rgba(255,61,0,0.07) 0%, transparent 70%)", pointerEvents:"none" }}/>

      {/* Ticker tape */}
      <div style={{ overflow:"hidden", marginBottom:64, position:"relative" }}>
        <div style={{ display:"flex", width:"max-content", gap:24 }} className="animate-ticker">
          {TICKER.map((t,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:24, flexShrink:0 }}>
              <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--text-muted)" }}>{t}</span>
              <span style={{ color:"var(--flame-2)", fontSize:16 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:620, margin:"0 auto", textAlign:"center", position:"relative" }}>
        <p style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.14em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:18 }}>Early Access</p>
        <h2 className="font-display" style={{ fontSize:"clamp(38px,6vw,68px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.04em", lineHeight:0.95, marginBottom:20 }}>
          Stop guessing.<br/><span className="flame-text">Start optimizing.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:17, color:"var(--text-secondary)", lineHeight:1.65, marginBottom:40 }}>
          Join thousands of athletes, biohackers, and high performers already on the waitlist. Founding members get unlimited stacks, lifetime rate lock, and direct input on what we build.
        </p>
        <WaitlistForm />
        <div style={{ display:"flex", justifyContent:"center", gap:48, marginTop:48 }}>
          {[["10k+","Early Signups"],["500+","Protocols"],["200+","Compounds"],["4.9★","Avg Rating"]].map(([v,l])=>(
            <div key={l} style={{ textAlign:"center" }}>
              <div className="flame-text font-display" style={{ fontWeight:800, fontSize:26 }}>{v}</div>
              <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginTop:3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
