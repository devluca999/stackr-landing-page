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
];

export default function Glossary() {
  const [active, setActive] = useState<string|null>(null);
  const [tab, setTab] = useState<"effects"|"cycle"|"dose"|"sideEffects"|"research">("effects");

  const selected = PEPTIDES.find(p=>p.name===active);

  return (
    <section style={{padding:"120px 48px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:64}}>
        <p style={{fontFamily:"DM Sans,sans-serif",fontSize:12,fontWeight:500,letterSpacing:"0.12em",color:"var(--flame-2)",textTransform:"uppercase",marginBottom:14}}>Compound Library</p>
        <h2 className="font-display" style={{fontSize:"clamp(34px,5vw,54px)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",lineHeight:1.08}}>
          Know your<br/><span className="flame-text">compounds.</span>
        </h2>
        <p style={{fontFamily:"DM Sans,sans-serif",fontSize:16,color:"var(--text-secondary)",maxWidth:460,margin:"16px auto 0",lineHeight:1.65}}>
          Every compound in Stackr comes with research-backed profiles — effects, dosing, cycles, and side effects — so you optimize with confidence.
        </p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:12,marginBottom:32}}>
        {PEPTIDES.map(p=>(
          <button key={p.name} onClick={()=>{setActive(active===p.name?null:p.name);setTab("effects");}}
            style={{padding:"16px 14px",borderRadius:14,background:active===p.name?"var(--surface-2)":"var(--surface)",
              border:active===p.name?`1px solid ${p.color}40`:"1px solid var(--border)",
              cursor:"pointer",textAlign:"left",transition:"all 0.2s",
              boxShadow:active===p.name?`0 0 20px ${p.color}18`:"var(--shadow-card)"}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:p.color,boxShadow:`0 0 5px ${p.color}`}}/>
              <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:"var(--text)"}}>{p.name}</span>
            </div>
            <div style={{fontFamily:"DM Sans,sans-serif",fontSize:10,color:"var(--text-muted)",marginBottom:8,lineHeight:1.4}}>{p.category}</div>
            <div style={{fontFamily:"DM Sans,sans-serif",fontSize:9,padding:"2px 7px",borderRadius:10,background:`${p.color}18`,color:p.color,border:`1px solid ${p.color}30`,display:"inline-block",letterSpacing:"0.04em"}}>{p.badge}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div style={{padding:"28px 28px",borderRadius:18,background:"var(--surface)",border:`1px solid ${selected.color}30`,boxShadow:`0 8px 40px rgba(0,0,0,0.3), 0 0 60px ${selected.color}10`,transition:"all 0.3s"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
            <div>
              <h3 className="font-display" style={{fontWeight:800,fontSize:22,color:"var(--text)",marginBottom:4}}>{selected.name}</h3>
              <p style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-muted)"}}>{selected.full}</p>
            </div>
            <span style={{fontFamily:"DM Sans,sans-serif",fontSize:11,padding:"4px 12px",borderRadius:20,background:`${selected.color}18`,color:selected.color,border:`1px solid ${selected.color}30`}}>{selected.category}</span>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
            {(["effects","cycle","dose","sideEffects","research"] as const).map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:12,padding:"6px 14px",borderRadius:8,border:"none",cursor:"pointer",transition:"all 0.2s",
                background:tab===t?"var(--gradient-h)":"var(--surface-2)",color:tab===t?"white":"var(--text-muted)",
                boxShadow:tab===t?"0 4px 12px rgba(255,100,0,0.3)":"none"}}>
                {t==="sideEffects"?"Side Effects":t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:15,color:"var(--text-secondary)",lineHeight:1.75}}>
            {selected[tab]}
          </p>
        </div>
      )}
    </section>
  );
}
