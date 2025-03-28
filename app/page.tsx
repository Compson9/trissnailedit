import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="mt-[50px]">
      <HeroSection />
      <Services/>
      <Footer/>
    </div>
  );
}
