import type { Metadata } from "next";
import Link from "next/link";
import { COMPOUNDS } from "../../lib/compounds";
import Nav from "../../components/sections/Nav";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Peptide & Compound Index",
  description: "Complete reference index for 50+ biohacking compounds — peptides, nootropics, longevity supplements. Includes BPC-157, TB-500, NMN, Semax, Melanotan I & II, Ipamorelin, and more with dosing, cycles, and research.",
  alternates: { canonical: "https://stackr-online.com/peptides" },
  openGraph: {
    title: "Peptide & Compound Index | STACKr",
    description: "Research-backed profiles for 50+ biohacking compounds. Dosing, cycles, side effects and more.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "STACKr Peptide & Compound Index",
  "description": "Complete reference for 50+ biohacking compounds including peptides, nootropics, and longevity supplements.",
  "url": "https://stackr-online.com/peptides",
  "hasPart": COMPOUNDS.map(c => ({
    "@type": "MedicalSubstance",
    "name": c.name,
    "alternateName": c.full,
    "url": `https://stackr-online.com/peptides/${c.slug}`,
    "description": c.description,
  })),
};

const CATEGORIES = ["All", "Peptide", "Nootropic Peptide", "Longevity", "Metabolic Peptide"];

export default function PeptidesPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ minHeight: "100vh", paddingTop: 88 }}>

        {/* Hero */}
        <section style={{ padding: "60px 48px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Compound Library</p>
          <h1 className="font-display" style={{ fontSize:"clamp(36px,5vw,58px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.05, marginBottom:16 }}>
            Peptide & Compound<br/><span className="flame-text">Index</span>
          </h1>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:17, color:"var(--text-secondary)", maxWidth:520, lineHeight:1.7, marginBottom:40 }}>
            Research-backed profiles for every compound in Stackr — peptides, nootropics, longevity supplements and more. Dosing guides, cycle protocols, side effects, and research citations.
          </p>

          {/* Compound grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16 }}>
            {COMPOUNDS.map(c => (
              <Link key={c.slug} href={`/peptides/${c.slug}`} style={{ textDecoration:"none" }}>
                <div className="card-base" style={{ padding:"22px 20px", cursor:"pointer" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:c.color, boxShadow:`0 0 8px ${c.color}`, flexShrink:0 }}/>
                    <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:15, color:"var(--text)" }}>{c.name}</span>
                    <span style={{ marginLeft:"auto", fontFamily:"DM Sans,sans-serif", fontSize:10, padding:"2px 9px", borderRadius:20, background:`${c.color}18`, color:c.color, border:`1px solid ${c.color}28` }}>{c.category}</span>
                  </div>
                  <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)", marginBottom:12, lineHeight:1.4 }}>{c.full}</p>
                  <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-secondary)", lineHeight:1.6, marginBottom:14 }}>{c.headline}</p>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {c.tags.map(t => (
                      <span key={t} style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, padding:"2px 8px", borderRadius:20, background:"var(--surface-2)", color:"var(--text-muted)", border:"1px solid var(--border)", textTransform:"uppercase", letterSpacing:"0.05em" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop:64, padding:"40px", borderRadius:16, background:"var(--surface)", border:"1px solid var(--border-warm)", textAlign:"center" }}>
            <h2 className="font-display" style={{ fontSize:28, fontWeight:800, color:"var(--text)", marginBottom:12, letterSpacing:"-0.02em" }}>
              Build your protocol in <span className="flame-text">Stackr</span>
            </h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:15, color:"var(--text-secondary)", marginBottom:24 }}>
              Pick your compounds, set dosages, track results, and share with the community.
            </p>
            <a href="/#waitlist" className="btn-flame" style={{ padding:"13px 32px" }}>Join Waitlist →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
