import About from "@/components/storefront/About";
import CategoryList from "@/components/storefront/CategoryList";
import Features from "@/components/storefront/Features";
import Hero from "@/components/storefront/Hero";
import WhyChooseUs from "@/components/storefront/WhyChooseUs";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <CategoryList />
      {/*<Features /> */}
    </>
  );
}
