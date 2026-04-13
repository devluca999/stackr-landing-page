import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPOUNDS, getCompound, generateStaticParams } from "../../../lib/compounds";
import Nav from "../../../components/sections/Nav";
import Footer from "../../../components/sections/Footer";

export { generateStaticParams };

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCompound(params.slug);
  if (!c) return { title: "Compound Not Found" };
  return {
    title: `${c.name} — Dosage, Cycle & Effects`,
    description: `${c.name} (${c.full}): ${c.description.slice(0, 155)}`,
    alternates: { canonical: `https://stackr-online.com/peptides/${c.slug}` },
    openGraph: {
      title: `${c.name} — ${c.headline}`,
      description: c.description,
      type: "article",
    },
    keywords: [c.name, c.full, ...c.tags, "biohacking", "peptide", "dosage", "cycle", "side effects"],
  };
}

export default function CompoundPage({ params }: { params: { slug: string } }) {
  const c = getCompound(params.slug);
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalSubstance",
    "name": c.name,
    "alternateName": c.full,
    "description": c.description,
    "url": `https://stackr-online.com/peptides/${c.slug}`,
    "medicineSystem": "Biohacking / Performance Medicine",
    "relevantSpecialty": "Sports Medicine",
    "recognizingAuthority": { "@type": "Organization", "name": "STACKr Research" },
    "sameAs": [`https://pubchem.ncbi.nlm.nih.gov/compound/${c.name.replace(/\s+/g,'-')}`],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `What is ${c.name}?`, "acceptedAnswer": { "@type": "Answer", "text": c.description } },
      { "@type": "Question", "name": `What is the recommended ${c.name} dosage?`, "acceptedAnswer": { "@type": "Answer", "text": `Typical dose: ${c.dose}. Route: ${c.route}.` } },
      { "@type": "Question", "name": `How long should I cycle ${c.name}?`, "acceptedAnswer": { "@type": "Answer", "text": c.cycle } },
      { "@type": "Question", "name": `What are ${c.name} side effects?`, "acceptedAnswer": { "@type": "Answer", "text": c.sideEffects } },
    ],
  };

  const related = COMPOUNDS.filter(x => x.slug !== c.slug && x.tags.some(t => c.tags.includes(t))).slice(0, 3);

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ minHeight:"100vh", paddingTop:88 }}>
        <article style={{ padding:"60px 48px 80px", maxWidth:820, margin:"0 auto" }}>

          {/* Breadcrumb */}
          <nav style={{ display:"flex", gap:8, alignItems:"center", marginBottom:32, fontFamily:"DM Sans,sans-serif", fontSize:13, color:"var(--text-muted)" }}>
            <Link href="/" style={{ color:"var(--text-muted)", textDecoration:"none" }}>Home</Link>
            <span>›</span>
            <Link href="/peptides" style={{ color:"var(--text-muted)", textDecoration:"none" }}>Compounds</Link>
            <span>›</span>
            <span style={{ color:"var(--text)" }}>{c.name}</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom:40 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:c.color, boxShadow:`0 0 10px ${c.color}` }}/>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, padding:"3px 10px", borderRadius:20, background:`${c.color}15`, color:c.color, border:`1px solid ${c.color}25` }}>{c.category}</span>
            </div>
            <h1 className="font-display" style={{ fontSize:"clamp(36px,6vw,64px)", fontWeight:800, color:"var(--text)", letterSpacing:"-0.03em", lineHeight:1.0, marginBottom:8 }}>
              {c.name}
            </h1>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-muted)", marginBottom:16 }}>{c.full}</p>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:19, color:"var(--text-secondary)", lineHeight:1.65, fontWeight:300 }}>{c.headline}</p>
          </div>

          {/* Tags */}
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:40 }}>
            {c.tags.map(t => <span key={t} style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, padding:"4px 12px", borderRadius:20, background:"var(--surface)", color:"var(--text-secondary)", border:"1px solid var(--border)" }}>{t}</span>)}
          </div>

          {/* Overview */}
          <section style={{ marginBottom:40 }}>
            <h2 className="font-display" style={{ fontSize:22, fontWeight:700, color:"var(--text)", marginBottom:14, letterSpacing:"-0.02em" }}>Overview</h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", lineHeight:1.8 }}>{c.description}</p>
          </section>

          {/* Quick stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12, marginBottom:40 }}>
            {[
              { label:"Typical Dose", value:c.dose },
              { label:"Cycle Protocol", value:c.cycle },
              { label:"Administration", value:c.route },
            ].map(stat => (
              <div key={stat.label} style={{ padding:"18px 16px", borderRadius:14, background:"var(--surface)", border:"1px solid var(--border)" }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:10, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8 }}>{stat.label}</div>
                <div style={{ fontFamily:"Syne,sans-serif", fontSize:14, fontWeight:700, color:"var(--text)", lineHeight:1.4 }}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* FAQ sections for structured data */}
          <section style={{ marginBottom:40 }}>
            <h2 className="font-display" style={{ fontSize:22, fontWeight:700, color:"var(--text)", marginBottom:20, letterSpacing:"-0.02em" }}>Side Effects</h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", lineHeight:1.8 }}>{c.sideEffects}</p>
          </section>

          <section style={{ marginBottom:40 }}>
            <h2 className="font-display" style={{ fontSize:22, fontWeight:700, color:"var(--text)", marginBottom:20, letterSpacing:"-0.02em" }}>Research</h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:16, color:"var(--text-secondary)", lineHeight:1.8 }}>{c.research}</p>
          </section>

          {/* CTA */}
          <div style={{ padding:"32px 28px", borderRadius:16, background:"var(--surface)", border:"1px solid var(--border-warm)", textAlign:"center", marginBottom:48 }}>
            <p className="font-display" style={{ fontSize:20, fontWeight:700, color:"var(--text)", marginBottom:8 }}>Add {c.name} to your stack</p>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"var(--text-muted)", marginBottom:20 }}>Track dosing, log effects, and share your protocol with the Stackr community.</p>
            <a href="/#waitlist" className="btn-flame" style={{ padding:"11px 28px" }}>Join Waitlist →</a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section>
              <h2 className="font-display" style={{ fontSize:20, fontWeight:700, color:"var(--text)", marginBottom:20, letterSpacing:"-0.02em" }}>Related Compounds</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:12 }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/peptides/${r.slug}`} style={{ textDecoration:"none" }}>
                    <div className="card-base" style={{ padding:"18px 16px", cursor:"pointer" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                        <div style={{ width:6, height:6, borderRadius:"50%", background:r.color }}/>
                        <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:14, color:"var(--text)" }}>{r.name}</span>
                      </div>
                      <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:"var(--text-muted)", lineHeight:1.5 }}>{r.headline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
