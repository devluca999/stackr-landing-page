"use client";
import { useState } from "react";

const METRICS = {
  focus:    { label:"Focus",    color:"#FF6A00", data:[42,48,45,52,58,61,55,63,68,72,74,78], unit:"score", icon:"🧠" },
  sleep:    { label:"Sleep",    color:"#FF9E00", data:[5.8,6.1,6.4,6.2,6.8,7.1,7.0,7.4,7.6,7.8,8.0,7.9], unit:"hrs", icon:"🌙" },
  energy:   { label:"Energy",   color:"#FFC700", data:[38,42,40,46,50,54,52,58,62,65,68,71], unit:"score", icon:"⚡" },
  recovery: { label:"Recovery", color:"#FF3D00", data:[55,57,54,60,63,66,64,69,72,75,76,80], unit:"score", icon:"🔄" },
};
type MetricKey = keyof typeof METRICS;
const WEEKS = ["Wk1","Wk2","Wk3","Wk4","Wk5","Wk6","Wk7","Wk8","Wk9","Wk10","Wk11","Wk12"];

function SparkLine({ data, color }: { data:number[]; color:string }) {
  const W=800, H=120, min=Math.min(...data), max=Math.max(...data), range=max-min||1;
  const pts = data.map((v,i)=>{
    const x=(i/(data.length-1))*W;
    const y=H-((v-min)/range)*(H*0.8)-H*0.1;
    return [x,y] as [number,number];
  });
  const path="M "+pts.map(p=>p.join(",")).join(" L ");
  const fill="M "+pts[0]!.join(",")+" L "+pts.map(p=>p.join(",")).join(" L ")+` L ${W},${H} L 0,${H} Z`;
  const gid=`g${color.replace("#","")}`;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{overflow:"visible"}}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${gid})`}/>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map(([x,y],i) => i===pts.length-1 ? (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill={color}/>
          <circle cx={x} cy={y} r={10} fill={color} opacity={0.2}/>
          <circle cx={x} cy={y} r={16} fill={color} opacity={0.08}/>
        </g>
      ):null)}
    </svg>
  );
}

export default function TrackingGraphs() {
  const [active, setActive] = useState<MetricKey>("focus");
  const m = METRICS[active];
  const delta = Math.round(((m.data[m.data.length-1]!-m.data[0]!)/m.data[0]!)*100);

  return (
    <section style={{padding:"120px 48px"}}>
      <div style={{maxWidth:1100, margin:"0 auto"}}>

        {/* Header */}
        <div style={{textAlign:"center", marginBottom:64}}>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:12,fontWeight:500,letterSpacing:"0.12em",color:"var(--flame-2)",textTransform:"uppercase",marginBottom:14}}>Tracking</p>
          <h2 className="font-display" style={{fontSize:"clamp(34px,5vw,54px)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",lineHeight:1.08}}>
            See your progress<br/><span className="flame-text">over time.</span>
          </h2>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:16,color:"var(--text-secondary)",maxWidth:440,margin:"16px auto 0",lineHeight:1.65}}>
            Daily check-ins take 60 seconds. Watch your metrics trend as your stack kicks in over weeks.
          </p>
          <div style={{marginTop:20}}>
            <a href="#waitlist" className="btn-ghost" style={{padding:"10px 24px",fontSize:14}}>Log your progress →</a>
          </div>
        </div>

        {/* Glass card floating above hex bg */}
        <div style={{
          background:"rgba(17,17,17,0.82)",
          backdropFilter:"blur(24px)",
          WebkitBackdropFilter:"blur(24px)",
          border:"1px solid rgba(255,106,0,0.14)",
          borderRadius:24,
          padding:"36px 32px",
          boxShadow:"0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
          position:"relative", overflow:"hidden",
        }}>
          {/* Corner glow */}
          <div style={{position:"absolute",top:-60,left:-60,width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle, ${m.color}18 0%, transparent 70%)`,pointerEvents:"none",transition:"background 0.4s"}}/>

          {/* Metric tabs */}
          <div style={{display:"flex",gap:8,marginBottom:32,flexWrap:"wrap"}}>
            {(Object.entries(METRICS) as [MetricKey, typeof METRICS[MetricKey]][]).map(([k,v])=>(
              <button key={k} onClick={()=>setActive(k)} style={{
                fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:13,
                padding:"8px 18px",borderRadius:10,border:"none",cursor:"pointer",transition:"all 0.2s",
                background: active===k ? "var(--gradient-h)" : "rgba(255,255,255,0.05)",
                color: active===k ? "white" : "var(--text-muted)",
                boxShadow: active===k ? `0 4px 20px ${v.color}40` : "none",
              }}>
                {v.icon} {v.label}
              </button>
            ))}
          </div>

          {/* Value + delta */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:20,flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:40,color:"var(--text)",lineHeight:1}}>
                <span style={{color:m.color}}>{m.data[m.data.length-1]}</span>
                <span style={{fontSize:18,fontWeight:500,color:"var(--text-muted)",marginLeft:8}}>{m.unit}</span>
              </div>
              <div style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-muted)",marginTop:6}}>
                Current · 12-week trend while on protocol
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:24,background:`${m.color}15`,border:`1px solid ${m.color}30`}}>
              <span style={{color:m.color,fontSize:16,fontWeight:800}}>↑</span>
              <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:m.color}}>+{delta}% since start</span>
            </div>
          </div>

          {/* Chart */}
          <div style={{marginBottom:10,position:"relative"}}>
            {/* Grid lines */}
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"}}>
              {[0,1,2,3].map(i=>(
                <div key={i} style={{borderTop:"1px solid rgba(255,255,255,0.04)",width:"100%"}}/>
              ))}
            </div>
            <SparkLine data={m.data} color={m.color}/>
          </div>

          {/* Week labels */}
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:24}}>
            {WEEKS.filter((_,i)=>i%2===0).map(w=>(
              <span key={w} style={{fontFamily:"DM Sans,sans-serif",fontSize:10,color:"var(--text-muted)"}}>{w}</span>
            ))}
          </div>

          {/* Protocol note */}
          <div style={{padding:"14px 18px",borderRadius:12,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:m.color,boxShadow:`0 0 8px ${m.color}`,flexShrink:0}}/>
            <p style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-secondary)"}}>
              Protocol active: <strong style={{color:"var(--text)"}}>Wolverine Recovery v2.1</strong> — Day 47 of 84
            </p>
          </div>
        </div>

        {/* Stats row below card */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginTop:20}}>
          {[
            {label:"Avg daily check-in",val:"58 sec",sub:"Fastest way to track"},
            {label:"Avg improvement",val:"+31%",sub:"Across all tracked metrics"},
            {label:"Protocol stacks",val:"6,200+",sub:"Active in the community"},
          ].map(s=>(
            <div key={s.label} style={{padding:"20px",borderRadius:16,background:"rgba(17,17,17,0.7)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"}}>
              <div style={{fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:26,color:"var(--text)",marginBottom:4}}>{s.val}</div>
              <div style={{fontFamily:"DM Sans,sans-serif",fontSize:11,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{s.label}</div>
              <div style={{fontFamily:"DM Sans,sans-serif",fontSize:12,color:"var(--text-muted)"}}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{textAlign:"center", marginTop:48}}>
          <a href="#waitlist" className="btn-flame" style={{padding:"14px 36px",fontSize:15}}>
            Track your protocol →
          </a>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:12,color:"var(--text-muted)",marginTop:12}}>
            Free to start · No credit card
          </p>
        </div>
      </div>
    </section>
  );
}
