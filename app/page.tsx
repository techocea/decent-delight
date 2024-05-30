import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <Newest />
      <Features />
      <About />
    </>
  );
}
