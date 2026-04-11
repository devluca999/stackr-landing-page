"use client";
import { WaitlistForm } from "./Hero";

export default function FinalCTA() {
  return (
    <section style={{ padding:"120px 24px", background:"var(--surface)", position:"relative", overflow:"hidden" }}>
      <div className="hex-pattern" style={{ position:"absolute", inset:0, opacity:0.5, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:500, background:"radial-gradient(ellipse, rgba(255,61,0,0.06) 0%, transparent 70%)", pointerEvents:"none" }}/>

      {/* Floating hex decal */}
      <svg width="140" height="160" viewBox="0 0 140 160" style={{ position:"absolute", top:40, right:"8%", opacity:0.06, pointerEvents:"none" }}>
        <polygon points="70,4 134,38 134,122 70,156 6,122 6,38" fill="none" stroke="#FF6A00" strokeWidth="1.5"/>
        <polygon points="70,22 116,48 116,112 70,138 24,112 24,48" fill="none" stroke="#FF9E00" strokeWidth="1"/>
      </svg>

      <div style={{ maxWidth:640, margin:"0 auto", textAlign:"center", position:"relative" }}>
        {/* Logo mark */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:32 }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <polygon points="26,2 50,15 50,37 26,50 2,37 2,15" fill="url(#finalgrad)"/>
            <text x="26" y="33" textAnchor="middle" fill="white" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="20">S</text>
            <defs><linearGradient id="finalgrad" x1="0" y1="0" x2="52" y2="52"><stop offset="0%" stopColor="#FF3D00"/><stop offset="100%" stopColor="#FFC700"/></linearGradient></defs>
          </svg>
        </div>
        <h2 className="font-display" style={{ fontSize:"clamp(38px,6vw,64px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.04em", lineHeight:0.95, marginBottom:20 }}>
          Your best self<br/>has a <span className="flame-text">protocol.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:17, color:"var(--text-secondary)", lineHeight:1.65, marginBottom:40, maxWidth:480, margin:"0 auto 40px" }}>
          Elite athletes, longevity researchers, and biohackers all run structured protocols. Now you can too — and share what works with the world.
        </p>
        <WaitlistForm />
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)", marginTop:20 }}>
          Free to join · No credit card · iOS & Android
        </p>
      </div>
    </section>
  );
}
