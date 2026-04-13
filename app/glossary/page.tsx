import type { Metadata } from "next";
import Link from "next/link";
import { COMPOUNDS } from "../../lib/compounds";
import Nav from "../../components/sections/Nav";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Biohacking Glossary — Peptides, Nootropics & Longevity Compounds",
  description: "Complete biohacking glossary. Definitions, dosing, cycles, and side effects for BPC-157, TB-500, NMN, Semax, Melanotan I & II, Ipamorelin, Retatrutide, and 50+ more compounds.",
  alternates: { canonical: "https://stackr-online.com/glossary" },
  openGraph: {
    title: "Biohacking Glossary | STACKr",
    description: "Definitions and quick-reference for 50+ biohacking compounds. Peptides, nootropics, longevity supplements and more.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "STACKr Biohacking Glossary",
  "url": "https://stackr-online.com/glossary",
  "mainEntity": COMPOUNDS.map(c => ({
    "@type": "Question",
    "name": `What is ${c.name}?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `${c.name} (${c.full}): ${c.description} Typical dose: ${c.dose}. Route: ${c.route}. Cycle: ${c.cycle}.`,
    },
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ minHeight:"100vh", paddingTop:88 }}>
        <section style={{ padding:"60px 48px 80px", maxWidth:900, margin:"0 auto" }}>

          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, fontWeight:500, letterSpacing:"0.12em", color:"var(--flame-2)", textTransform:"uppercase", marginBottom:14 }}>Reference</p>
          <h1 className="font-display" style={{ fontSize:"clamp(36px,5vw,58px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.05, marginBottom:16 }}>
            Biohacking<br/><span className="flame-text">Glossary</span>
          </h1>
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:17, color:"var(--text-secondary)", maxWidth:520, lineHeight:1.7, marginBottom:48 }}>
            Quick-reference definitions for the compounds, peptides, and supplements used in performance and longevity protocols.
          </p>

          {/* Alphabetical entries */}
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {COMPOUNDS.sort((a, b) => a.name.localeCompare(b.name)).map((c, i) => (
              <div key={c.slug} style={{ padding:"28px 0", borderBottom:"1px solid var(--border)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16, flexWrap:"wrap", marginBottom:10 }}>
                  <div>
                    <h2 className="font-display" style={{ fontSize:20, fontWeight:700, color:"var(--text)", letterSpacing:"-0.02em", marginBottom:2 }}>{c.name}</h2>
                    <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)" }}>{c.full} · {c.category}</p>
                  </div>
                  <Link href={`/peptides/${c.slug}`} style={{ fontFamily:"Syne,sans-serif", fontSize:12, fontWeight:600, color:"var(--flame-2)", textDecoration:"none", whiteSpace:"nowrap", paddingTop:4 }}>
                    Full profile →
                  </Link>
                </div>
                <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:15, color:"var(--text-secondary)", lineHeight:1.72, marginBottom:14 }}>{c.description}</p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:8 }}>
                  <div style={{ padding:"10px 14px", borderRadius:10, background:"var(--surface)", border:"1px solid var(--border)" }}>
                    <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4 }}>Dose</div>
                    <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text)" }}>{c.dose}</div>
                  </div>
                  <div style={{ padding:"10px 14px", borderRadius:10, background:"var(--surface)", border:"1px solid var(--border)" }}>
                    <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4 }}>Cycle</div>
                    <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text)" }}>{c.cycle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop:64, padding:"40px", borderRadius:16, background:"var(--surface)", border:"1px solid var(--border-warm)", textAlign:"center" }}>
            <h2 className="font-display" style={{ fontSize:26, fontWeight:800, color:"var(--text)", marginBottom:12, letterSpacing:"-0.02em" }}>
              Track every compound in <span className="flame-text">Stackr</span>
            </h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:15, color:"var(--text-secondary)", marginBottom:24 }}>
              Build your protocol, log daily results, and share what works with 10,000+ biohackers.
            </p>
            <a href="/#waitlist" className="btn-flame" style={{ padding:"13px 32px" }}>Join Waitlist →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
