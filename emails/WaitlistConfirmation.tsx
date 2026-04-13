// Stackr waitlist confirmation email
// Preview at: https://react.email/preview
// Send via: Resend SDK in /api/waitlist/route.ts

import {
  Body, Container, Head, Heading, Hr, Html,
  Link, Preview, Section, Text, Row, Column,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  email?: string;
}

export default function WaitlistConfirmation({
  email = "optimizer@example.com",
}: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the Stackr waitlist 🔥 — we&apos;ll be in touch soon.</Preview>
      <Body style={s.body}>
        <Container style={s.container}>

          <Section style={s.logoSection}>
            <Text style={s.wordmark}>⬡ STACKR</Text>
          </Section>
          <Hr style={{ borderColor: "#FF6A00", borderTopWidth: 2, margin: "0 40px" }} />

          <Section style={s.hero}>
            <Heading style={s.h1}>You&apos;re on the list. 🔥</Heading>
            <Text style={s.body2}>
              Welcome to the Stackr waitlist — the biohacking protocol OS built
              for people who take optimization seriously.
            </Text>
          </Section>

          <Hr style={s.hr} />

          <Section style={s.section}>
            <Text style={s.label}>WHAT YOU&apos;RE GETTING EARLY ACCESS TO</Text>
            {[
              { icon: "🧬", title: "Protocol OS",        desc: "Build structured stacks with real dosing, timing, and cycling windows — not scattered notes." },
              { icon: "📈", title: "Track what works",   desc: "Daily 60-second check-ins. Watch focus, sleep, energy, and recovery trend as your stack kicks in." },
              { icon: "🤝", title: "Protocol network",   desc: "Clone elite stacks, remix to your body, share what you find. GitHub for biohacking." },
              { icon: "🔬", title: "Compound library",   desc: "Research-backed profiles for 53+ peptides, nootropics, adaptogens, and longevity compounds." },
            ].map((f) => (
              <Row key={f.title} style={{ marginBottom: 14 }}>
                <Column style={{ width: 32, fontSize: 18, verticalAlign: "top", paddingTop: 2 }}>{f.icon}</Column>
                <Column>
                  <Text style={s.featTitle}>{f.title}</Text>
                  <Text style={s.featDesc}>{f.desc}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={s.hr} />

          <Section style={s.section}>
            <Text style={s.label}>FOUNDING MEMBER OFFER</Text>
            <Text style={s.body2}>
              Early Optimizer pricing locks in at{" "}
              <strong style={{ color: "#FF6A00" }}>$4.99/month forever</strong> — less
              than half the regular Pro price. Available to the first 500 waitlist
              members only.
            </Text>
            <Section style={{ textAlign: "center", marginTop: 24 }}>
              <Link href="https://stackr-online.com/#pricing" style={s.cta}>
                View Early Optimizer Pricing →
              </Link>
            </Section>
          </Section>

          <Hr style={s.hr} />

          <Section style={s.section}>
            <Text style={s.label}>POPULAR PROTOCOLS IN THE NETWORK</Text>
            {[
              { name: "Wolverine Recovery",     tags: "BPC-157 · TB-500 · GHK-Cu",         clones: "8.2k clones" },
              { name: "Bryan Johnson Blueprint", tags: "NMN · Rapamycin · Acarbose",         clones: "12.4k clones" },
              { name: "Deep Focus Protocol",    tags: "Semax · Alpha-GPC · Lion's Mane",    clones: "3.8k clones" },
            ].map((st) => (
              <Row key={st.name} style={{ marginBottom: 10 }}>
                <Column style={{ width: 16, color: "#FF6A00", fontSize: 18 }}>·</Column>
                <Column>
                  <Text style={s.stackName}>{st.name}</Text>
                  <Text style={s.stackMeta}>{st.tags} · <span style={{ color: "#FF6A00" }}>{st.clones}</span></Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={s.hr} />

          <Section style={s.footer}>
            <Text style={s.footerText}>
              You&apos;re receiving this because <strong>{email}</strong> joined
              the Stackr waitlist at{" "}
              <Link href="https://stackr-online.com" style={s.footerLink}>stackr-online.com</Link>.
            </Text>
            <Text style={s.footerText}>
              Questions? Reply to this email — we read everything.
            </Text>
            <Text style={{ ...s.footerText, marginTop: 12 }}>
              <Link href="https://stackr-online.com" style={s.footerLink}>stackr-online.com</Link>
              {" · "}
              <Link href="https://stackr-online.com/#pricing" style={s.footerLink}>Pricing</Link>
              {" · "}
              <Link href="mailto:hello@stackr-online.com" style={s.footerLink}>Contact</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const s = {
  body:        { backgroundColor: "#0A0A0A", fontFamily: "'DM Sans',-apple-system,sans-serif", margin: 0, padding: "40px 0" } as React.CSSProperties,
  container:   { backgroundColor: "#111111", borderRadius: 16, maxWidth: 560, margin: "0 auto", border: "1px solid rgba(255,255,255,0.07)" } as React.CSSProperties,
  logoSection: { padding: "28px 40px 16px" } as React.CSSProperties,
  wordmark:    { fontWeight: 800, fontSize: 16, letterSpacing: "0.14em", color: "#F0EDE8", margin: 0 } as React.CSSProperties,
  hero:        { padding: "28px 40px 24px" } as React.CSSProperties,
  h1:          { color: "#F0EDE8", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: "1.15", margin: "0 0 12px" } as React.CSSProperties,
  body2:       { color: "#9A9690", fontSize: 15, lineHeight: "1.7", margin: 0 } as React.CSSProperties,
  hr:          { borderColor: "rgba(255,255,255,0.06)", margin: "0 40px" } as React.CSSProperties,
  section:     { padding: "24px 40px" } as React.CSSProperties,
  label:       { color: "#FF6A00", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", margin: "0 0 16px" } as React.CSSProperties,
  featTitle:   { color: "#F0EDE8", fontSize: 14, fontWeight: 700, margin: "0 0 2px" } as React.CSSProperties,
  featDesc:    { color: "#524E4A", fontSize: 13, lineHeight: "1.6", margin: 0 } as React.CSSProperties,
  cta:         { backgroundColor: "#FF6A00", color: "#ffffff", fontSize: 14, fontWeight: 700, borderRadius: 10, padding: "13px 28px", textDecoration: "none", display: "inline-block" } as React.CSSProperties,
  stackName:   { color: "#F0EDE8", fontSize: 13, fontWeight: 700, margin: "0 0 1px" } as React.CSSProperties,
  stackMeta:   { color: "#524E4A", fontSize: 11, margin: 0 } as React.CSSProperties,
  footer:      { padding: "20px 40px 28px" } as React.CSSProperties,
  footerText:  { color: "#3A3835", fontSize: 11, lineHeight: "1.6", margin: "0 0 4px" } as React.CSSProperties,
  footerLink:  { color: "#524E4A", textDecoration: "underline" } as React.CSSProperties,
};
