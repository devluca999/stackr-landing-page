"use client";
import { useState } from "react";

const PEPTIDES = [
  {
    name:"BPC-157", full:"Body Protection Compound 157", category:"Repair & Recovery",
    badge:"Most Popular", color:"#FF3D00",
    effects:"Accelerates tendon, ligament, and muscle healing. Reduces inflammation. Supports gut lining repair. Often called the 'wolverine peptide' for its rapid tissue regeneration.",
    cycle:"4–6 weeks on, 2 weeks off. Most users run 2–3 cycles per year around injuries or training blocks.",
    dose:"200–500mcg/day. Subcutaneous or IM injection near injury site, or oral for gut health.",
    sideEffects:"Generally well-tolerated. Mild injection site discomfort. No known serious side effects in human use.",
    research:"Extensive animal studies. Limited human clinical trials. Widely used in sports medicine.",
  },
  {
    name:"TB-500", full:"Thymosin Beta-4", category:"Recovery & Mobility",
    badge:"Synergy: BPC-157", color:"#FF6A00",
    effects:"Promotes systemic healing and flexibility. Upregulates actin — the protein that builds cell structure. Reduces inflammation and scar tissue formation throughout the body.",
    cycle:"2.5mg 2x/week for 4–6 weeks (loading), then 2.5mg/week maintenance. Stack with BPC-157 for synergistic repair.",
    dose:"2–2.5mg per injection, 2x/week. SubQ injection anywhere on the body.",
    sideEffects:"Mild fatigue during loading phase. Head rush immediately post-injection. Generally very safe.",
    research:"Significant animal evidence. Used in racehorses for decades. Human anecdotal data robust.",
  },
  {
    name:"GHK-Cu", full:"Copper Peptide GHK-Cu", category:"Longevity & Skin",
    badge:"Anti-aging", color:"#FF9E00",
    effects:"Stimulates collagen synthesis, wound healing, and stem cell activation. Strong anti-inflammatory. Reverses gene expression associated with aging. Popular for skin and hair.",
    cycle:"Topical: daily indefinitely. Injectable: 1–2mg/day for 4–6 weeks, 4 weeks off.",
    dose:"1–2mg/day subcutaneous. Topical creams typically 0.1–2% concentration.",
    sideEffects:"Extremely well tolerated. Topical may cause temporary redness. Injectable: mild injection site reactions.",
    research:"Strong research base in wound healing and anti-aging. Thousands of published studies.",
  },
  {
    name:"Ipamorelin", full:"Ipamorelin Acetate", category:"GH & Recovery",
    badge:"Clean GH Release", color:"#FFC700",
    effects:"Selective GH secretagogue. Triggers natural growth hormone pulses without elevating cortisol or prolactin. Improves sleep quality, recovery speed, and body composition over time.",
    cycle:"3–6 months. Often stacked with CJC-1295 for amplified GH release. Run 5 days on, 2 off.",
    dose:"200–300mcg before bed. SubQ injection. Stack with CJC-1295 DAC for longer GH pulse.",
    sideEffects:"Mild water retention early on. Tingling hands. Slight hunger increase. Headache if dose too high.",
    research:"Solid clinical research. FDA-designated as Investigational New Drug. Clean safety profile.",
  },
  {
    name:"Semax", full:"Synthetic ACTH Fragment", category:"Nootropics",
    badge:"Cognitive Edge", color:"#FF6A00",
    effects:"Increases BDNF (Brain-Derived Neurotrophic Factor). Enhances memory, focus, and processing speed. Neuroprotective effects. Widely used in Russia as a prescription cognitive enhancer.",
    cycle:"Nasal: 1–2 sprays per nostril daily for 2 weeks on, 1 week off. Longer cycles tolerated.",
    dose:"200–900mcg/day via nasal spray or injection. Start low. Most users feel effects within 30 minutes.",
    sideEffects:"Mild anxiety at high doses. Tolerance builds with extended use. Generally safe.",
    research:"Approved drug in Russia and Ukraine. Strong clinical evidence for cognitive and neuroprotective effects.",
  },
  {
    name:"RETA (Retatrutide)", full:"Retatrutide GLP-1/GIP/Glucagon", category:"Metabolic",
    badge:"Cutting Edge", color:"#FF3D00",
    effects:"Triple hormone receptor agonist (GLP-1, GIP, glucagon). More potent fat loss than semaglutide in trials. Up to 24% body weight reduction in Phase 2 trials. Metabolic reset.",
    cycle:"Titration protocol: start 0.5mg/week, increase monthly to 4–8mg/week. Minimum 6-month commitment.",
    dose:"0.5–12mg/week SubQ. Requires slow titration to minimize GI side effects.",
    sideEffects:"Nausea, reduced appetite (dose-dependent). Muscle loss if protein intake insufficient. Not for type 1 diabetics.",
    research:"Phase 3 trials ongoing (2024–2025). Phase 2 showed exceptional results. Most promising metabolic peptide in pipeline.",
  },
  {
    name:"Melanotan I", full:"Afamelanotide (MT-I)", category:"Skin & Performance",
    badge:"FDA-Approved Form", color:"#FF9E00",
    effects:"Non-selective melanocortin receptor agonist. Potent tanning without UV exposure. FDA-approved as Scenesse for erythropoietic protoporphyria. May reduce appetite and inflammation. Longer half-life and cleaner safety profile than MT-II.",
    cycle:"0.5–2mg SubQ every 3–4 days for 2–3 weeks to build a base tan, then 1mg/week maintenance. No desensitization cycle required.",
    dose:"0.5–2mg SubQ. Start at 0.5mg to assess tolerance. Scenesse implant is FDA-approved at 16mg every 2 months for EPP patients.",
    sideEffects:"Nausea and flushing for 30–60 mins post-injection, especially early doses. Darkening of existing moles — monitor closely. Spontaneous erections less common than MT-II. Fatigue at high doses.",
    research:"FDA-approved as Scenesse for EPP since 2019. Extensive clinical trial history. Best-characterized melanocortin peptide safety profile.",
  },
  {
    name:"Melanotan II", full:"Melanotan II (MT-II)", category:"Skin, Libido & Fat Loss",
    badge:"Multi-target", color:"#FF6A00",
    effects:"Melanocortin 1/3/4/5 receptor agonist. Stronger tanning than MT-I. Significant appetite suppression via MC4R. Libido and erectile function enhancement. Some thermogenic fat loss. More potent but shorter acting than MT-I.",
    cycle:"0.25–1mg SubQ daily for 10–14 days loading, then 0.5mg 2–3x/week maintenance. Cycle 8 weeks on, 4 weeks off.",
    dose:"0.25–1mg SubQ. Always start at 0.25mg to assess tolerance. Nasal spray available but ~80% less bioavailable than SubQ injection.",
    sideEffects:"Nausea and facial flushing (diminish after first week). Spontaneous erections. Yawning. Darkening of moles and freckles. Monitor all skin lesions. Avoid with personal or family history of melanoma.",
    research:"Developed at University of Arizona. Extensive research on tanning, libido, and appetite suppression. Not FDA-approved — research use only. Long-term safety data limited.",
  },
];

export default function Glossary() {
  const [active, setActive] = useState<string|null>(null);
  const [tab, setTab] = useState<"effects"|"cycle"|"dose"|"sideEffects"|"research">("effects");
  const selected = PEPTIDES.find(p=>p.name===active);

  return (
    <section id="compounds" style={{padding:"120px 48px", maxWidth:1100, margin:"0 auto"}}>
      <div style={{textAlign:"center", marginBottom:64}}>
        <p style={{fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14}}>Compound Library</p>
        <h2 className="font-display" style={{fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08}}>
          Know your<br/><span className="flame-text">compounds.</span>
        </h2>
        <p style={{fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", maxWidth:480, margin:"16px auto 0", lineHeight:1.65}}>
          Every compound in Stackr comes with research-backed profiles — effects, dosing, cycles, and side effects.
        </p>
      </div>

      {/* Compound grid — fully theme-aware */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))", gap:12, marginBottom:32}}>
        {PEPTIDES.map(p => {
          const isActive = active === p.name;
          return (
            <button
              key={p.name}
              onClick={() => { setActive(isActive ? null : p.name); setTab("effects"); }}
              style={{
                padding:"16px 14px",
                borderRadius:14,
                // Use CSS vars so both modes work correctly
                background: isActive ? "var(--surface-2)" : "var(--surface)",
                border: isActive ? `1px solid ${p.color}50` : "1px solid var(--border)",
                cursor:"pointer",
                textAlign:"left",
                transition:"all 0.2s",
                boxShadow: isActive ? `0 0 24px ${p.color}20` : "var(--shadow-card)",
              }}>
              <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:6}}>
                <div style={{width:6, height:6, borderRadius:"50%", background:p.color, boxShadow:`0 0 5px ${p.color}`, flexShrink:0}}/>
                {/* color:"var(--text)" ensures readable in both modes */}
                <span style={{fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:12, color:"var(--text)"}}>{p.name}</span>
              </div>
              <div style={{fontFamily:"DM Sans,sans-serif", fontSize:10, color:"var(--text-muted)", marginBottom:8, lineHeight:1.4}}>{p.category}</div>
              <div style={{fontFamily:"DM Sans,sans-serif", fontSize:9, padding:"2px 7px", borderRadius:10, background:`${p.color}15`, color:p.color, border:`1px solid ${p.color}30`, display:"inline-block", letterSpacing:"0.04em"}}>{p.badge}</div>
            </button>
          );
        })}
      </div>

      {!selected && (
        <div style={{textAlign:"center",marginBottom:16}}>
          <a href="#waitlist" className="btn-flame" style={{padding:"12px 32px",fontSize:14}}>
            Build your stack in Stackr →
          </a>
        </div>
      )}

      {/* Detail panel — also fully theme-aware */}
      {selected && (
        <div style={{
          padding:"28px",
          borderRadius:18,
          // theme-aware background
          background:"var(--surface)",
          border:`1px solid ${selected.color}30`,
          boxShadow:`0 8px 40px rgba(0,0,0,0.15), 0 0 60px ${selected.color}08`,
          transition:"all 0.3s",
        }}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20, flexWrap:"wrap", gap:12}}>
            <div>
              {/* var(--text) for both modes */}
              <h3 className="font-display" style={{fontWeight:800, fontSize:22, color:"var(--text)", marginBottom:4}}>{selected.name}</h3>
              <p style={{fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)"}}>{selected.full}</p>
            </div>
            <span style={{fontFamily:"DM Sans,sans-serif", fontSize:11, padding:"4px 12px", borderRadius:20, background:`${selected.color}15`, color:selected.color, border:`1px solid ${selected.color}25`}}>{selected.category}</span>
          </div>

          {/* Tab buttons — theme-aware */}
          <div style={{display:"flex", gap:8, marginBottom:20, flexWrap:"wrap"}}>
            {(["effects","cycle","dose","sideEffects","research"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                fontFamily:"Syne,sans-serif",
                fontWeight:600,
                fontSize:12,
                padding:"6px 14px",
                borderRadius:8,
                border: tab===t ? "none" : "1px solid var(--border)",
                cursor:"pointer",
                transition:"all 0.2s",
                background: tab===t ? "var(--gradient-h)" : "var(--surface-2)",
                color: tab===t ? "white" : "var(--text-secondary)",
                boxShadow: tab===t ? "0 4px 12px rgba(255,100,0,0.3)" : "none",
              }}>
                {t==="sideEffects" ? "Side Effects" : t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>

          {/* Content — var(--text-secondary) works in both modes */}
          <p style={{fontFamily:"DM Sans,sans-serif", fontSize:15, color:"var(--text-secondary)", lineHeight:1.75}}>
            {selected[tab]}
          </p>

          {/* In-context CTA */}
          <div style={{marginTop:24, paddingTop:20, borderTop:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12}}>
            <p style={{fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)"}}>
              Add {selected.name} to your protocol in Stackr
            </p>
            <a href="#waitlist" className="btn-flame" style={{padding:"9px 20px", fontSize:13}}>
              Get started →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
