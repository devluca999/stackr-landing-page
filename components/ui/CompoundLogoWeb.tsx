"use client";

// Web version of the CompoundLogo — matches the React Native app's molecular bond graph exactly.
// 6 nodes arranged in a ring, connected by 9 lines (ring + 3 diagonals), flame gradient.

interface CompoundLogoWebProps {
  size?: number;
  id?: string; // unique gradient ID to avoid SVG conflicts when used multiple times
}

export default function CompoundLogoWeb({ size = 32, id = "clg" }: CompoundLogoWebProps) {
  const c = size / 2;
  const r = size / 2;
  const nr = size / 8; // node radius

  const nodes = [
    { x: c,           y: c - r * 0.6  },
    { x: c + r * 0.52, y: c - r * 0.3 },
    { x: c + r * 0.52, y: c + r * 0.3 },
    { x: c,           y: c + r * 0.6  },
    { x: c - r * 0.52, y: c + r * 0.3 },
    { x: c - r * 0.52, y: c - r * 0.3 },
  ];

  const connections: [number, number][] = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,0], // ring
    [0,3],[1,4],[2,5],                   // diagonals
  ];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FF3D00"/>
          <stop offset="40%"  stopColor="#FF6A00"/>
          <stop offset="100%" stopColor="#FFC700"/>
        </linearGradient>
      </defs>
      {connections.map(([i, j], idx) => (
        <line
          key={idx}
          x1={nodes[i].x} y1={nodes[i].y}
          x2={nodes[j].x} y2={nodes[j].y}
          stroke={`url(#${id})`}
          strokeWidth={size / 16}
          strokeOpacity={0.55}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={nr} fill={`url(#${id})`} />
      ))}
    </svg>
  );
}
