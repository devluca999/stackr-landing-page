"use client";

const CYCLES = [
  {
    name:"Wolverine Recovery", duration:"6 weeks", goal:"Injury repair & joint health",
    color:"#FF3D00", badge:"Most Cloned",
    items:[
      {compound:"BPC-157",dose:"250mcg",timing:"AM + PM",notes:"SubQ near injury site"},
      {compound:"TB-500",dose:"2.5mg",timing:"2x/week",notes:"Full body SubQ"},
      {compound:"GHK-Cu",dose:"1mg",timing:"PM",notes:"SubQ, promotes collagen"},
      {compound:"Vitamin C",dose:"2000mg",timing:"AM",notes:"Cofactor for collagen synthesis"},
    ],
    protocol:"Run 6 weeks, take 2 weeks off. Most users see significant improvement in weeks 3–4. Stack BPC-157 and TB-500 on the same days for maximum synergy.",
  },
  {
    name:"Deep Focus Protocol", duration:"4 weeks", goal:"Cognitive performance & BDNF",
    color:"#FF6A00", badge:"Community Favorite",
    items:[
      {compound:"Semax",dose:"600mcg",timing:"AM",notes:"Nasal spray, pre-work"},
      {compound:"Alpha-GPC",dose:"300mg",timing:"AM",notes:"Choline source, acetylcholine"},
      {compound:"Lion's Mane",dose:"1000mg",timing:"AM + PM",notes:"NGF stimulation"},
      {compound:"L-Theanine",dose:"200mg",timing:"With caffeine",notes:"Smooth focus, no jitter"},
    ],
    protocol:"Run continuously for 4 weeks. Semax tolerance builds — take 1 week off per month. Best felt within 20–30 mins of AM dosing.",
  },
  {
    name:"Longevity Foundation", duration:"Ongoing", goal:"Anti-aging & healthspan",
    color:"#FF9E00", badge:"Bryan Johnson Inspired",
    items:[
      {compound:"NMN",dose:"500mg",timing:"AM (fasted)",notes:"NAD+ precursor"},
      {compound:"Resveratrol",dose:"1000mg",timing:"AM with fat",notes:"Sirtuin activation"},
      {compound:"Spermidine",dose:"1.2mg",timing:"AM",notes:"Autophagy inducer"},
      {compound:"Metformin",dose:"500mg",timing:"Evening",notes:"Rx required in most countries"},
    ],
    protocol:"This stack is built for long-term use. No cycling required for NMN or Resveratrol. Metformin should be taken under medical supervision.",
  },
];

export default function Cycles() {
  return (
    <section style={{padding:"120px 48px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative"}}>
        <div style={{textAlign:"center",marginBottom:72}}>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:12,fontWeight:500,letterSpacing:"0.12em",color:"var(--flame-2)",textTransform:"uppercase",marginBottom:14}}>Example Regimens</p>
          <h2 className="font-display" style={{fontSize:"clamp(34px,5vw,54px)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",lineHeight:1.08}}>
            Ready-to-run<br/><span className="flame-text">cycles & protocols</span>
          </h2>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:16,color:"var(--text-secondary)",maxWidth:440,margin:"16px auto 0",lineHeight:1.65}}>
            Structured timing, dosing, and cycling windows — built to clone in one tap.
          </p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          {CYCLES.map((c,i)=>(
            <div key={i} style={{
              background:"rgba(17,17,17,0.80)",
              backdropFilter:"blur(20px)",
              WebkitBackdropFilter:"blur(20px)",
              border:`1px solid ${c.color}22`,
              borderRadius:20,
              padding:"28px 28px",
              boxShadow:`0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)`,
              position:"relative", overflow:"hidden",
            }}>
              {/* Left accent bar */}
              <div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:`linear-gradient(180deg,${c.color},${c.color}00)`}}/>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:c.color,boxShadow:`0 0 10px ${c.color}`}}/>
                    <h3 className="font-display" style={{fontWeight:800,fontSize:20,color:"var(--text)",letterSpacing:"-0.02em"}}>{c.name}</h3>
                    <span style={{fontFamily:"DM Sans,sans-serif",fontSize:10,padding:"2px 9px",borderRadius:10,background:`${c.color}18`,color:c.color,border:`1px solid ${c.color}28`}}>{c.badge}</span>
                  </div>
                  <p style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-muted)"}}>{c.goal} · {c.duration}</p>
                </div>
                <button className="btn-flame" style={{padding:"9px 20px",fontSize:12}}>Clone Stack</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:10,marginBottom:20}}>
                {c.items.map((item,j)=>(
                  <div key={j} style={{padding:"12px 14px",borderRadius:12,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                      <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:"var(--text)"}}>{item.compound}</span>
                      <span style={{fontFamily:"DM Sans,sans-serif",fontSize:11,fontWeight:600,color:c.color}}>{item.dose}</span>
                    </div>
                    <span style={{fontFamily:"DM Sans,sans-serif",fontSize:11,color:"var(--text-muted)"}}>{item.timing}</span>
                    <p style={{fontFamily:"DM Sans,sans-serif",fontSize:11,color:"var(--text-muted)",lineHeight:1.4,marginTop:2}}>{item.notes}</p>
                  </div>
                ))}
              </div>
              <div style={{padding:"14px 16px",borderRadius:10,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"}}>
                <p style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-secondary)",lineHeight:1.65}}>
                  <strong style={{color:`${c.color}cc`,fontWeight:600}}>Protocol: </strong>{c.protocol}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
