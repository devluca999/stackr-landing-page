import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedStacks from "@/components/sections/FeaturedStacks";
import MidCTA from "@/components/sections/MidCTA";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedStacks />
        <MidCTA />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
