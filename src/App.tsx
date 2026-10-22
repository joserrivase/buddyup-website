import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Proof } from "./components/Proof";
import { Screenshots } from "./components/Screenshots";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { GoalTypes } from "./components/GoalTypes";
import { Modes } from "./components/Modes";
import { Challenge } from "./components/Challenge";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Screenshots />
        <Features />
        <HowItWorks />
        <GoalTypes />
        <Modes />
        <Challenge />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
