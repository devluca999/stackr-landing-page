import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import GithubAnalogy from "@/components/sections/GithubAnalogy";
import Community from "@/components/sections/Community";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <GithubAnalogy />
        <Community />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
