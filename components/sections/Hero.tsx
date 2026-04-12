"use client";
import { useState, useEffect, useRef } from "react";

const WORDS = ["recovery.", "performance.", "longevity.", "focus.", "sleep.", "hormones."];

const CAROUSEL = [
  { name:"Wolverine Recovery", tags:["BPC-157","TB-500","GHK-Cu"], clones:"8.2k", color:"#FF3D00" },
  { name:"Bryan Johnson Blueprint", tags:["NMN","Rapamycin","Acarbose"], clones:"12.4k", color:"#FF6A00" },
  { name:"Huberman Morning Stack", tags:["AG1","Creatine","Vit D3"], clones:"6.9k", color:"#FF9E00" },
  { name:"Attia Longevity Core", tags:["Metformin","SGLT2","Omega-3"], clones:"5.1k", color:"#FFC700" },
  { name:"Flow State Protocol", tags:["Alpha-GPC","L-Theanine","Semax"], clones:"3.8k", color:"#FF6A00" },
  { name:"Deep Sleep Stack", tags:["Mag-L-Threonate","Glycine","Apigenin"], clones:"4.2k", color:"#FF9E00" },
  { name:"Tanning & Libido Stack", tags:["Melanotan II","PT-141","Berberine"], clones:"2.1k", color:"#FF6A00" },
  { name:"Skin Optimization", tags:["Melanotan I","GHK-Cu","Collagen"], clones:"1.8k", color:"#FF9E00" },
  { name:"Wolverine Recovery", tags:["BPC-157","TB-500","GHK-Cu"], clones:"8.2k", color:"#FF3D00" },
  { name:"Bryan Johnson Blueprint", tags:["NMN","Rapamycin","Acarbose"], clones:"12.4k", color:"#FF6A00" },
  { name:"Huberman Morning Stack", tags:["AG1","Creatine","Vit D3"], clones:"6.9k", color:"#FF9E00" },
  { name:"Attia Longevity Core", tags:["Metformin","SGLT2","Omega-3"], clones:"5.1k", color:"#FFC700" },
  { name:"Flow State Protocol", tags:["Alpha-GPC","L-Theanine","Semax"], clones:"3.8k", color:"#FF6A00" },
  { name:"Deep Sleep Stack", tags:["Mag-L-Threonate","Glycine","Apigenin"], clones:"4.2k", color:"#FF9E00" },
];

export function WaitlistForm({ compact=false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const r = await fetch("/api/waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});
      setStatus(r.ok?"success":"error");
    } catch { setStatus("error"); }
  };
  if (status==="success") return (
    <div style={{padding:compact?"12px 24px":"16px 32px",borderRadius:12,background:"rgba(255,106,0,0.08)",border:"1px solid rgba(255,106,0,0.2)",textAlign:"center"}}>
      <span className="flame-text font-display" style={{fontWeight:700,fontSize:compact?15:18}}>You&apos;re on the list. 🔥 We&apos;ll be in touch soon.</span>
    </div>
  );
  return (
    <form onSubmit={submit} style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:compact?"flex-start":"center"}}>
      <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} required style={{flex:1,minWidth:200,padding:compact?"11px 16px":"14px 18px"}}/>
      <button type="submit" className="btn-flame" style={{padding:compact?"11px 22px":"14px 28px",opacity:status==="loading"?0.7:1}} disabled={status==="loading"}>
        {status==="loading"?"Joining...":"Get Early Access →"}
      </button>
      {status==="error"&&<p style={{width:"100%",fontSize:12,color:"var(--flame-2)"}}>Something went wrong. Try again.</p>}
    </form>
  );
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(()=>{setWordIdx(i=>(i+1)%WORDS.length);setFade(true);},280);
    },2200);
    return ()=>clearInterval(iv);
  },[]);

  return (
    <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"130px 24px 60px",position:"relative",overflow:"hidden"}}>
      <div className="hex-pattern" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>

      {/* Pulse orbs - dark mode only */}
      <div className="pulse-orb" style={{width:600,height:600,top:"5%",left:"50%",transform:"translateX(-50%)",animationDelay:"0s"}}/>
      <div className="pulse-orb" style={{width:300,height:300,bottom:"20%",left:"10%",animationDelay:"2s"}}/>
      <div className="pulse-orb" style={{width:250,height:250,bottom:"25%",right:"8%",animationDelay:"3.5s"}}/>

      {/* Molecular SVG decal */}
      <svg width="160" height="160" viewBox="0 0 160 160" style={{position:"absolute",top:110,right:"7%",opacity:0.12,pointerEvents:"none"}}>
        <circle cx="80" cy="25" r="10" fill="none" stroke="#FF6A00" strokeWidth="1.5"/>
        <circle cx="135" cy="80" r="10" fill="none" stroke="#FF9E00" strokeWidth="1.5"/>
        <circle cx="80" cy="135" r="10" fill="none" stroke="#FF6A00" strokeWidth="1.5"/>
        <circle cx="25" cy="80" r="10" fill="none" stroke="#FF9E00" strokeWidth="1.5"/>
        <circle cx="80" cy="80" r="14" fill="none" stroke="#FFC700" strokeWidth="1.5"/>
        <line x1="80" y1="35" x2="80" y2="66" stroke="#FF6A00" strokeWidth="1"/>
        <line x1="121" y1="80" x2="94" y2="80" stroke="#FF9E00" strokeWidth="1"/>
        <line x1="80" y1="94" x2="80" y2="125" stroke="#FF6A00" strokeWidth="1"/>
        <line x1="35" y1="80" x2="66" y2="80" stroke="#FF9E00" strokeWidth="1"/>
        <text x="80" y="84" textAnchor="middle" fill="#FFC700" fontSize="8" fontFamily="DM Sans,sans-serif" fontWeight="500">BPC</text>
      </svg>

      {/* Hex decal bottom left */}
      <svg width="110" height="130" viewBox="0 0 110 130" style={{position:"absolute",bottom:"18%",left:"5%",opacity:0.1,pointerEvents:"none"}}>
        <polygon points="55,4 106,30 106,100 55,126 4,100 4,30" fill="none" stroke="#FF6A00" strokeWidth="1.5"/>
        <polygon points="55,18 92,40 92,90 55,112 18,90 18,40" fill="none" stroke="#FF9E00" strokeWidth="1"/>
        <polygon points="55,35 78,48 78,82 55,95 32,82 32,48" fill="none" stroke="#FFC700" strokeWidth="0.75"/>
      </svg>

      {/* Badge */}
      <div className="animate-fade-in" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 16px 5px 7px",borderRadius:30,background:"var(--surface)",border:"1px solid var(--border-warm)",marginBottom:32,boxShadow:"0 2px 12px rgba(255,106,0,0.1)"}}>
        <span style={{background:"var(--gradient-h)",borderRadius:20,padding:"2px 10px",fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:10,color:"white",letterSpacing:"0.08em"}}>NEW</span>
        <span style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-secondary)"}}>The biohacking protocol OS is here</span>
      </div>

      {/* Headline */}
      <div style={{textAlign:"center",maxWidth:900,marginBottom:20}}>
        <h1 className="font-display animate-slide-up d1" style={{fontSize:"clamp(54px,9vw,100px)",fontWeight:800,lineHeight:0.92,letterSpacing:"-0.04em",color:"var(--text)"}}>
          Optimize<br/>
          <span style={{opacity:fade?1:0,transition:"opacity 0.28s"}} className="flame-text">{WORDS[wordIdx]}</span>
        </h1>
      </div>
      <p className="animate-slide-up d3" style={{fontFamily:"DM Sans,sans-serif",fontSize:"clamp(16px,2vw,19px)",fontWeight:300,color:"var(--text-secondary)",textAlign:"center",maxWidth:500,lineHeight:1.7,marginBottom:12}}>
        Your biohacking protocol OS. Build your personal stack, track what actually works, and discover protocols used by the world&apos;s top performers.
      </p>
      <p className="animate-slide-up d4" style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-muted)",marginBottom:40}}>
        Peptides · Nootropics · Longevity · Hormones · Recovery · Sleep
      </p>

      <div className="animate-slide-up d5" id="waitlist" style={{width:"100%",maxWidth:460,marginBottom:28}}>
        <WaitlistForm/>
      </div>

      {/* App store badges */}
      <div className="animate-slide-up d6" style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:72}}>
        {[
          {icon:<svg viewBox="0 0 24 24" width="20" fill="var(--text)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04zm-7.46-14.8c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,store:"App Store",sub:"Download on the"},
          {icon:<svg viewBox="0 0 24 24" width="20" fill="var(--text)"><path d="M3.18 23.76c.37.2.8.22 1.2.06l11.39-6.57-2.4-2.41-10.19 8.92zM20.65 10.2L17.1 8.18l-2.75 2.52 2.76 2.52 3.56-2.04c.5-.29.8-.8.8-1.36s-.3-1.05-.82-1.62zM1.35.31C1.13.54 1 .89 1 1.33v21.34c0 .44.13.79.35 1.03l.06.05 11.94-11.94v-.28L1.41.25zm13 12.97-2.99 2.99L1.2 10.4l10.16 5.87 2.99 2.99z"/></svg>,store:"Google Play",sub:"Get it on"},
        ].map(({icon,store,sub})=>(
          <div key={store} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 20px",borderRadius:12,background:"var(--surface)",border:"1px solid var(--border)",cursor:"pointer",transition:"all 0.2s",boxShadow:"var(--shadow-card)"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,106,0,0.3)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(255,106,0,0.12)";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="var(--shadow-card)";}}>
            {icon}
            <div>
              <div style={{fontFamily:"DM Sans,sans-serif",fontSize:10,color:"var(--text-muted)",lineHeight:1}}>{sub}</div>
              <div style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:"var(--text)"}}>{store}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel — fixed with fade edges */}
      <div className="carousel-wrapper animate-slide-up d8">
        <div style={{display:"flex",gap:14,width:"max-content",padding:"4px 0"}} className="animate-carousel">
          {CAROUSEL.map((s,i)=>(
            <div key={i} style={{minWidth:234,padding:"16px 18px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,flexShrink:0,boxShadow:"var(--shadow-card)",transition:"all 0.2s",cursor:"pointer"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border-warm)";(e.currentTarget as HTMLElement).style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:s.color,flexShrink:0,boxShadow:`0 0 6px ${s.color}`}}/>
                <div style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:"var(--text)"}}>{s.name}</div>
              </div>
              <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:10}}>
                {s.tags.map(t=><span key={t} style={{fontFamily:"DM Sans,sans-serif",fontSize:10,padding:"3px 8px",borderRadius:20,background:"var(--surface-2)",color:"var(--text-muted)",border:"1px solid var(--border)"}}>{t}</span>)}
              </div>
              <div style={{fontFamily:"Syne,sans-serif",fontSize:11,fontWeight:700,color:"var(--flame-2)"}}>{s.clones} clones</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
