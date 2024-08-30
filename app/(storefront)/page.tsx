import About from "@/components/storefront/About";
import CategoryList from "@/components/storefront/CategoryList";
import Features from "@/components/storefront/Features";
import Hero from "@/components/storefront/Hero";
import MostDelicious from "@/components/storefront/MostDelicious";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <MostDelicious />
      <About />
      <CategoryList />
      <Features />
    </>
  );
}
