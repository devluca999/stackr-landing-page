"use client";
import { useState } from "react";

const METRICS = {
  focus:    { label:"Focus",    color:"#FF6A00", data:[42,48,45,52,58,61,55,63,68,72,74,78], unit:"score" },
  sleep:    { label:"Sleep",    color:"#FF9E00", data:[5.8,6.1,6.4,6.2,6.8,7.1,7.0,7.4,7.6,7.8,8.0,7.9], unit:"hrs" },
  energy:   { label:"Energy",   color:"#FFC700", data:[38,42,40,46,50,54,52,58,62,65,68,71], unit:"score" },
  recovery: { label:"Recovery", color:"#FF3D00", data:[55,57,54,60,63,66,64,69,72,75,76,80], unit:"score" },
};

type MetricKey = keyof typeof METRICS;

function SparkLine({ data, color, width=400, height=100 }: { data:number[]; color:string; width?:number; height?:number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height * 0.8) - height * 0.1;
    return `${x},${y}`;
  });
  const path = "M " + pts.join(" L ");
  const fill = "M " + pts[0] + " L " + pts.join(" L ") + ` L ${width},${height} L 0,${height} Z`;

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} style={{ overflow:"visible" }}>
      <defs>
        <linearGradient id={`grad-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#grad-${color.replace("#","")})`}/>
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {data.map((v,i)=>{
        const x=(i/(data.length-1))*width;
        const y=height-((v-min)/range)*(height*0.8)-height*0.1;
        return i===data.length-1 ? (
          <g key={i}>
            <circle cx={x} cy={y} r={4} fill={color}/>
            <circle cx={x} cy={y} r={8} fill={color} opacity={0.2}/>
          </g>
        ) : null;
      })}
    </svg>
  );
}

const WEEKS = ["Wk1","Wk2","Wk3","Wk4","Wk5","Wk6","Wk7","Wk8","Wk9","Wk10","Wk11","Wk12"];

export default function TrackingGraphs() {
  const [active, setActive] = useState<MetricKey>("focus");
  const m = METRICS[active];

  return (
    <section style={{padding:"120px 48px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:64}}>
        <p style={{fontFamily:"DM Sans,sans-serif",fontSize:12,fontWeight:500,letterSpacing:"0.12em",color:"var(--flame-2)",textTransform:"uppercase",marginBottom:14}}>Tracking</p>
        <h2 className="font-display" style={{fontSize:"clamp(34px,5vw,54px)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",lineHeight:1.08}}>
          See your progress<br/><span className="flame-text">over time.</span>
        </h2>
        <p style={{fontFamily:"DM Sans,sans-serif",fontSize:16,color:"var(--text-secondary)",maxWidth:440,margin:"16px auto 0",lineHeight:1.65}}>
          Daily check-ins take 60 seconds. Watch your metrics trend as your stack kicks in over weeks.
        </p>
      </div>

      <div className="card-base" style={{padding:"32px 28px",boxShadow:"0 8px 40px rgba(0,0,0,0.3)"}}>
        {/* Filter tabs */}
        <div style={{display:"flex",gap:10,marginBottom:28,flexWrap:"wrap"}}>
          {(Object.keys(METRICS) as MetricKey[]).map(k=>(
            <button key={k} onClick={()=>setActive(k)}
              style={{fontFamily:"Syne,sans-serif",fontWeight:600,fontSize:13,padding:"8px 18px",borderRadius:10,border:"none",cursor:"pointer",transition:"all 0.2s",
                background:active===k?"var(--gradient-h)":"var(--surface-2)",
                color:active===k?"white":"var(--text-muted)",
                boxShadow:active===k?"0 4px 16px rgba(255,100,0,0.3)":"none"}}>
              {METRICS[k].label}
            </button>
          ))}
        </div>

        {/* Graph header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:16,flexWrap:"wrap",gap:8}}>
          <div>
            <div style={{fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:32,color:"var(--text)"}}>
              <span className="flame-text">{m.data[m.data.length-1]}</span>
              <span style={{fontSize:16,fontWeight:500,color:"var(--text-muted)",marginLeft:6}}>{m.unit}</span>
            </div>
            <div style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-muted)"}}>Current · 12-week trend while on protocol</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:20,background:`${m.color}15`,border:`1px solid ${m.color}25`}}>
            <span style={{color:m.color,fontSize:14}}>↑</span>
            <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:13,color:m.color}}>
              +{Math.round(((m.data[m.data.length-1]-m.data[0])/m.data[0])*100)}% since start
            </span>
          </div>
        </div>

        {/* Chart */}
        <div style={{marginBottom:12}}>
          <SparkLine data={m.data} color={m.color} width={800} height={120}/>
        </div>

        {/* Week labels */}
        <div style={{display:"flex",justifyContent:"space-between"}}>
          {WEEKS.filter((_,i)=>i%2===0).map(w=>(
            <span key={w} style={{fontFamily:"DM Sans,sans-serif",fontSize:10,color:"var(--text-muted)"}}>{w}</span>
          ))}
        </div>

        {/* Protocol note */}
        <div style={{marginTop:20,padding:"12px 16px",borderRadius:10,background:"var(--surface-2)",border:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:m.color,flexShrink:0}}/>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:13,color:"var(--text-secondary)"}}>
            Protocol active: <strong style={{color:"var(--text)"}}>Wolverine Recovery v2.1</strong> — Day 47 of 84
          </p>
        </div>
      </div>
    </section>
  );
}
