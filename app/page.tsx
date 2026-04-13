import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedStacks from "@/components/sections/FeaturedStacks";
import Cycles from "@/components/sections/Cycles";
import TrackingGraphs from "@/components/sections/TrackingGraphs";
import Glossary from "@/components/sections/Glossary";
import MidCTA from "@/components/sections/MidCTA";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/* 
        Persistent hex grid that covers the ENTIRE page.
        All section backgrounds are transparent or glass —
        they float above this layer rather than replacing it.
      */}
      <div
        aria-hidden="true"
        style={{
          position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0-4.3L52.5 48V20L28 4.3 3.5 20v28L28 61.7z' fill='none' stroke='rgba(255%2C106%2C0%2C0.07)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize:"56px 100px",
        }}
      />
      <main style={{ position:"relative", zIndex:1 }}>
        <Hero />
        <section id="features" style={{ scrollMarginTop:"68px" }}><HowItWorks /></section>
        <section id="stacks" style={{ scrollMarginTop:"68px" }}><FeaturedStacks /></section>
        <Cycles />
        <section id="tracking" style={{ scrollMarginTop:"68px" }}><TrackingGraphs /></section>
        <section id="compounds" style={{ scrollMarginTop:"68px" }}><Glossary /></section>
        <MidCTA />
        <section id="pricing" style={{ scrollMarginTop:"68px" }}><Pricing /></section>
        <section id="waitlist" style={{ scrollMarginTop:"68px" }}><FinalCTA /></section>
      </main>
      <Footer />
    </>
  );
}
