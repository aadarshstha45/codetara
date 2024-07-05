import Map from "@/utils/Map";

import {
  ApproachSection,
  HeroSection,
  PortfolioSection,
  ServiceSection,
  StackSection,
  TestimonialSection,
} from "./HomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StackSection />
      <ApproachSection />
      <ServiceSection />
      <PortfolioSection />
      {/* <Youtube /> */}
      <TestimonialSection />
      <Map />
    </>
  );
}
