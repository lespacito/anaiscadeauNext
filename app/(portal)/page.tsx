import HeroTop from "@/components/sections/hero-top";
import BlogSection from "@/components/sections/blog-section";
export default function Home() {
  return (
    <>
      <HeroTop />
      <div className="h-5/6" />
      <BlogSection />
    </>
  );
}
