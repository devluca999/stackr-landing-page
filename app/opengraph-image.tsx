import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Stackr — Protocol OS for Human Optimization';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Flame glow top-left */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(255,61,0,0.18) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Bottom flame bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #FF3D00, #FF6A00, #FFC700, transparent)',
          display: 'flex',
        }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          {/* Molecular logo (simplified SVG-like circles) */}
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF3D00, #FF6A00, #FFC700)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
            }} />
          </div>
          <span style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800, letterSpacing: 2 }}>
            STACKR
          </span>
        </div>

        {/* Headline */}
        <div style={{
          color: '#FFFFFF',
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: -2,
          marginBottom: 24,
          maxWidth: 720,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          The protocol OS for human optimization.
        </div>

        {/* Sub */}
        <div style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 24,
          lineHeight: 1.5,
          maxWidth: 600,
          marginBottom: 48,
          display: 'flex',
        }}>
          Build, track, and share your peptide and supplement stacks. Clone protocols from 6,000+ optimizers.
        </div>

        {/* Compound pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['BPC-157', 'TB-500', 'Semax', 'NMN', 'Rapamycin'].map((c) => (
            <div key={c} style={{
              background: 'rgba(255,106,0,0.12)',
              border: '1px solid rgba(255,106,0,0.3)',
              borderRadius: 999,
              padding: '8px 18px',
              color: '#FF9E00',
              fontSize: 16,
              fontWeight: 600,
              display: 'flex',
            }}>
              {c}
            </div>
          ))}
        </div>

        {/* stackr-online.com badge */}
        <div style={{
          position: 'absolute', bottom: 40, right: 80,
          color: 'rgba(255,255,255,0.3)',
          fontSize: 18,
          display: 'flex',
        }}>
          stackr-online.com
        </div>
      </div>
    ),
    { ...size }
  );
}
