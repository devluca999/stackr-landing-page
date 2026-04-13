"use client";
import { useState } from "react";

const PEPTIDES = [
  { name:"BPC-157", full:"Body Protection Compound 157", category:"Repair & Recovery", badge:"Most Popular", color:"#FF3D00",
    effects:"Accelerates tendon, ligament, and muscle healing. Reduces inflammation. Supports gut lining repair. Often called the 'wolverine peptide' for its rapid tissue regeneration.",
    cycle:"4–6 weeks on, 2 weeks off. Most users run 2–3 cycles per year around injuries or training blocks.",
    dose:"200–500mcg/day. Subcutaneous or IM injection near injury site, or oral for gut health.",
    sideEffects:"Generally well-tolerated. Mild injection site discomfort. No known serious side effects in human use.",
    research:"Extensive animal studies. Limited human clinical trials. Widely used in sports medicine." },
  { name:"TB-500", full:"Thymosin Beta-4", category:"Recovery & Mobility", badge:"Synergy: BPC-157", color:"#FF6A00",
    effects:"Promotes systemic healing and flexibility. Upregulates actin — the protein that builds cell structure. Reduces inflammation and scar tissue formation throughout the body.",
    cycle:"2.5mg 2x/week for 4–6 weeks (loading), then 2.5mg/week maintenance. Stack with BPC-157 for synergistic repair.",
    dose:"2–2.5mg per injection, 2x/week. SubQ injection anywhere on the body.",
    sideEffects:"Mild fatigue during loading phase. Head rush immediately post-injection. Generally very safe.",
    research:"Significant animal evidence. Used in racehorses for decades. Human anecdotal data robust." },
  { name:"GHK-Cu", full:"Copper Peptide GHK-Cu", category:"Longevity & Skin", badge:"Anti-aging", color:"#FF9E00",
    effects:"Stimulates collagen synthesis, wound healing, and stem cell activation. Strong anti-inflammatory. Reverses gene expression associated with aging.",
    cycle:"Topical: daily indefinitely. Injectable: 1–2mg/day for 4–6 weeks, 4 weeks off.",
    dose:"1–2mg/day subcutaneous. Topical creams typically 0.1–2% concentration.",
    sideEffects:"Extremely well tolerated. Topical may cause temporary redness.",
    research:"Strong research base in wound healing and anti-aging. Thousands of published studies." },
  { name:"Ipamorelin", full:"Ipamorelin Acetate", category:"GH & Recovery", badge:"Clean GH Release", color:"#FFC700",
    effects:"Selective GH secretagogue. Triggers natural growth hormone pulses without elevating cortisol or prolactin. Improves sleep quality, recovery speed, and body composition over time.",
    cycle:"3–6 months. Often stacked with CJC-1295. Run 5 days on, 2 off.",
    dose:"200–300mcg before bed. SubQ injection. Stack with CJC-1295 DAC for longer GH pulse.",
    sideEffects:"Mild water retention early on. Tingling hands. Slight hunger increase.",
    research:"Solid clinical research. FDA-designated as Investigational New Drug. Clean safety profile." },
  { name:"Semax", full:"Synthetic ACTH Fragment", category:"Nootropics", badge:"Cognitive Edge", color:"#FF6A00",
    effects:"Increases BDNF. Enhances memory, focus, and processing speed. Neuroprotective effects. Widely used in Russia as a prescription cognitive enhancer.",
    cycle:"Nasal: 1–2 sprays per nostril daily for 2 weeks on, 1 week off.",
    dose:"200–900mcg/day via nasal spray or injection. Start low.",
    sideEffects:"Mild anxiety at high doses. Tolerance builds with extended use.",
    research:"Approved drug in Russia and Ukraine. Strong clinical evidence." },
  { name:"Retatrutide", full:"GLP-1/GIP/Glucagon Agonist", category:"Metabolic", badge:"Cutting Edge", color:"#FF3D00",
    effects:"Triple hormone receptor agonist. More potent fat loss than semaglutide in trials. Up to 24% body weight reduction in Phase 2. Metabolic reset.",
    cycle:"Titration protocol: start 0.5mg/week, increase monthly to 4–8mg/week. Minimum 6 months.",
    dose:"0.5–12mg/week SubQ. Requires slow titration to minimize GI side effects.",
    sideEffects:"Nausea, reduced appetite (dose-dependent). Muscle loss if protein intake insufficient.",
    research:"Phase 3 trials ongoing. Phase 2 showed exceptional results. Most promising metabolic peptide." },
  { name:"Melanotan I", full:"Afamelanotide (MT-I)", category:"Skin & Performance", badge:"FDA-Approved Form", color:"#FF9E00",
    effects:"Potent tanning without UV exposure. FDA-approved as Scenesse. May reduce appetite and inflammation. Longer half-life and cleaner safety profile than MT-II.",
    cycle:"0.5–2mg SubQ every 3–4 days for 2–3 weeks to build a base tan, then 1mg/week maintenance.",
    dose:"0.5–2mg SubQ. Start at 0.5mg to assess tolerance.",
    sideEffects:"Nausea and flushing post-injection. Darkening of existing moles — monitor closely.",
    research:"FDA-approved as Scenesse for EPP since 2019. Best-characterized melanocortin peptide." },
  { name:"Melanotan II", full:"Melanotan II (MT-II)", category:"Skin, Libido & Fat Loss", badge:"Multi-target", color:"#FF6A00",
    effects:"Stronger tanning than MT-I. Significant appetite suppression via MC4R. Libido enhancement. Some thermogenic fat loss.",
    cycle:"0.25–1mg SubQ daily for 10–14 days loading, then 0.5mg 2–3x/week. Cycle 8 weeks on, 4 off.",
    dose:"0.25–1mg SubQ. Always start at 0.25mg to assess tolerance.",
    sideEffects:"Nausea and facial flushing. Spontaneous erections. Darkening of moles. Avoid with melanoma history.",
    research:"Developed at University of Arizona. Not FDA-approved — research use only." },
];

const TAB_CONFIG = [
  { key:"effects" as const,     label:"Effects",      icon:"⚡" },
  { key:"cycle" as const,       label:"Cycle",        icon:"🔄" },
  { key:"dose" as const,        label:"Dosage",       icon:"💉" },
  { key:"sideEffects" as const, label:"Side Effects",  icon:"⚠️" },
  { key:"research" as const,    label:"Research",     icon:"🔬" },
];

export default function Glossary() {
  const [active, setActive] = useState<string|null>(null);
  const [tab, setTab] = useState<"effects"|"cycle"|"dose"|"sideEffects"|"research">("effects");
  const selected = PEPTIDES.find(p => p.name === active);

  return (
    <section id="compounds" style={{ padding:"80px 48px", maxWidth:1100, margin:"0 auto" }}>
      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:56 }}>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Compound Library</p>
        <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
          Know your<br/><span className="flame-text">compounds.</span>
        </h2>
        <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", maxWidth:480, margin:"16px auto 0", lineHeight:1.65 }}>
          Every compound in Stackr comes with research-backed profiles — effects, dosing, cycles, and side effects.
        </p>
      </div>

      {/* Compound grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10, marginBottom:28 }}>
        {PEPTIDES.map(p => {
          const isActive = active === p.name;
          return (
            <button key={p.name} onClick={() => { setActive(isActive ? null : p.name); setTab("effects"); }}
              style={{
                padding:"16px 14px", borderRadius:16, textAlign:"left", cursor:"pointer",
                transition:"all 0.2s",
                background: isActive ? "var(--surface-2)" : "var(--surface)",
                border: isActive ? `1.5px solid ${p.color}60` : "1px solid var(--border)",
                boxShadow: isActive ? `0 0 28px ${p.color}18, 0 4px 16px rgba(0,0,0,0.2)` : "var(--shadow-card)",
                transform: isActive ? "translateY(-2px)" : "none",
                position:"relative", overflow:"hidden",
              }}>
              {/* Glow on active */}
              {isActive && <div style={{ position:"absolute", top:-20, left:-20, width:80, height:80, borderRadius:"50%", background:`radial-gradient(circle, ${p.color}20, transparent 70%)`, pointerEvents:"none" }}/>}
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:7 }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:p.color, boxShadow:`0 0 6px ${p.color}`, flexShrink:0 }}/>
                <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:12, color:"var(--text)" }}>{p.name}</span>
              </div>
              <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, color:"var(--text-muted)", marginBottom:9, lineHeight:1.4 }}>{p.category}</div>
              <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:9, padding:"2px 8px", borderRadius:10, background:`${p.color}15`, color:p.color, border:`1px solid ${p.color}30`, display:"inline-block", letterSpacing:"0.04em", fontWeight:600 }}>{p.badge}</div>
            </button>
          );
        })}
      </div>

      {/* Single CTA when nothing selected */}
      {!selected && (
        <div style={{ textAlign:"center", marginBottom:8 }}>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", marginBottom:16 }}>
            Select a compound above to explore its profile ↑
          </p>
          <a href="#waitlist" className="btn-flame" style={{ padding:"12px 32px", fontSize:14 }}>
            Build your stack in Stackr →
          </a>
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div style={{
          borderRadius:20, overflow:"hidden",
          background:"var(--surface)",
          border:`1px solid ${selected.color}30`,
          boxShadow:`0 8px 48px rgba(0,0,0,0.18), 0 0 80px ${selected.color}06`,
          transition:"all 0.3s",
        }}>
          {/* Flame accent bar */}
          <div style={{ height:3, background:`linear-gradient(90deg, ${selected.color}, ${selected.color}00)` }}/>

          <div style={{ padding:"28px 28px 0" }}>
            {/* Header row */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20, flexWrap:"wrap", gap:12 }}>
              <div>
                <h3 className="font-display" style={{ fontWeight:800, fontSize:24, color:"var(--text)", marginBottom:4, letterSpacing:"-0.02em" }}>{selected.name}</h3>
                <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)" }}>{selected.full}</p>
              </div>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, padding:"5px 14px", borderRadius:20, background:`${selected.color}15`, color:selected.color, border:`1px solid ${selected.color}25`, fontWeight:600, letterSpacing:"0.04em", alignSelf:"flex-start" }}>{selected.category}</span>
            </div>

            {/* Tabs */}
            <div style={{ display:"flex", gap:6, flexWrap:"wrap", borderBottom:"1px solid var(--border)", paddingBottom:0, marginBottom:0 }}>
              {TAB_CONFIG.map(t => (
                <button key={t.key} onClick={() => setTab(t.key)}
                  style={{
                    fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:13,
                    padding:"9px 16px",
                    borderRadius:"10px 10px 0 0",
                    border:"none", cursor:"pointer", transition:"all 0.18s",
                    background: tab===t.key ? "var(--surface-2)" : "transparent",
                    color: tab===t.key ? "var(--text)" : "var(--text-muted)",
                    borderBottom: tab===t.key ? `2px solid ${selected.color}` : "2px solid transparent",
                    marginBottom:-1,
                  }}>
                  <span style={{ marginRight:5 }}>{t.icon}</span>{t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div style={{ padding:"24px 28px 28px" }}>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:15, color:"var(--text-secondary)", lineHeight:1.8, marginBottom:24 }}>
              {selected[tab]}
            </p>

            {/* In-context CTA */}
            <div style={{ padding:"16px 20px", borderRadius:12, background:"var(--surface-2)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
              <div>
                <p style={{ fontFamily:"Syne,sans-serif", fontWeight:600, fontSize:13, color:"var(--text)", marginBottom:2 }}>
                  Add {selected.name} to your Stackr protocol
                </p>
                <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)" }}>
                  Track dosage, timing, and outcomes alongside your full stack
                </p>
              </div>
              <a href="#waitlist" className="btn-flame" style={{ padding:"9px 20px", fontSize:13, flexShrink:0 }}>
                Get started →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
