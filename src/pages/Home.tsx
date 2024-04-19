import { ApproachSection } from "../components/HomeComponent/ApproachSection";
import { HeroSection } from "../components/HomeComponent/HeroSection";
import { PortfolioSection } from "../components/HomeComponent/PortfolioSection";
import { ServiceSection } from "../components/HomeComponent/ServiceSection";
import { StackSection } from "../components/HomeComponent/StackSection";
import { TestimonialSection } from "../components/HomeComponent/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StackSection />
      <ApproachSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
    </>
  );
}
