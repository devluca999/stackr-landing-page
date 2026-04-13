"use client";

const STACKS = [
  { name:"Wolverine Recovery", by:"Community Verified", desc:"BPC-157 + TB-500 + GHK-Cu peptide combo for accelerated tissue repair, joint health, and systemic recovery.", tags:["Peptides","Recovery","Anti-inflammatory"], clones:"8.2k", compounds:6, rating:"4.9" },
  { name:"Bryan Johnson Blueprint", by:"Blueprint Protocol", desc:"The longevity stack from the man spending $2M/year to reverse aging. NMN, Rapamycin, Acarbose, and 50+ compounds.", tags:["Longevity","Anti-aging","Hormones"], clones:"12.4k", compounds:50, rating:"4.8" },
  { name:"Huberman Morning", by:"Community Verified", desc:"Andrew Huberman's researched morning stack for cortisol optimization, focus, and cognitive performance.", tags:["Nootropics","Focus","Morning"], clones:"6.9k", compounds:8, rating:"4.7" },
  { name:"Flow State Protocol", by:"Top Contributor", desc:"Alpha-GPC, L-Theanine, Semax, and Lion's Mane timed for maximum cognitive output during deep work sessions.", tags:["Nootropics","Focus","Productivity"], clones:"3.8k", compounds:7, rating:"4.8" },
  { name:"Deep Sleep Stack", by:"Sleep Specialist", desc:"Magnesium L-Threonate, Glycine, Apigenin, and Inositol. Everything your brain needs to hit slow-wave sleep.", tags:["Sleep","Recovery","Longevity"], clones:"4.2k", compounds:5, rating:"4.9" },
  { name:"Testosterone Foundation", by:"Community Verified", desc:"Zinc, Boron, Ashwagandha, Tongkat Ali, and Fadogia for natural testosterone support without pharmaceutical intervention.", tags:["Hormones","Performance","Men's Health"], clones:"5.6k", compounds:8, rating:"4.6" },
];

export default function FeaturedStacks() {
  return (
    <section style={{ padding:"80px 48px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Protocol Library</p>
          <h2 className="font-display" style={{ fontSize:"clamp(34px,5vw,54px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.08 }}>
            Stacks the best<br/><span className="flame-text">performers actually use</span>
          </h2>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:17, color:"var(--text-secondary)", maxWidth:460, margin:"20px auto 0", lineHeight:1.65 }}>
            Clone any protocol in one tap. Every stack is structured, versioned, and rated by the community.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:18 }}>
          {STACKS.map((s,i) => (
            <div key={i} style={{
              background:"var(--surface)",
              border:"1px solid var(--border)",
              borderRadius:18,
              padding:"24px",
              boxShadow:"var(--shadow-card)",
              transition:"transform 0.2s, border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.borderColor="var(--border-warm)";(e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.borderColor="var(--border)";(e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)";}}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                <div>
                  <h3 className="font-display" style={{ fontWeight:700, fontSize:16, color:"var(--text)", marginBottom:3 }}>{s.name}</h3>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)" }}>{s.by}</span>
                </div>
                <button className="btn-flame" style={{ padding:"7px 16px", fontSize:12, flexShrink:0 }}>Clone</button>
              </div>
              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.65, marginBottom:14 }}>{s.desc}</p>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:14 }}>
                {s.tags.map(t=><span key={t} style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, padding:"3px 9px", borderRadius:20, background:"var(--surface-2)", color:"var(--text-muted)", border:"1px solid var(--border)", textTransform:"uppercase", letterSpacing:"0.05em" }}>{t}</span>)}
              </div>
              <div style={{ display:"flex", gap:20, paddingTop:12, borderTop:"1px solid var(--border)" }}>
                <div><span className="flame-text font-display" style={{ fontWeight:700, fontSize:16 }}>{s.clones}</span><span style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginLeft:4 }}>clones</span></div>
                <div><span className="flame-text font-display" style={{ fontWeight:700, fontSize:16 }}>{s.compounds}</span><span style={{ fontFamily:"DM Sans,sans-serif", fontSize:11, color:"var(--text-muted)", marginLeft:4 }}>compounds</span></div>
                <div><span className="flame-text font-display" style={{ fontWeight:700, fontSize:16 }}>★ {s.rating}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:48 }}>
          <a href="#waitlist" className="btn-flame" style={{ padding:"14px 32px" }}>Browse all stacks →</a>
        </div>
      </div>
    </section>
  );
}
