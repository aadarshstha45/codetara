import Map from "@/utils/Map";

import {
  ApproachSection,
  HeroSection,
  ServiceSection,
  StackSection,
  TestimonialSection,
  Youtube,
} from "./HomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StackSection />
      <ApproachSection />
      <ServiceSection />
      {/* <PortfolioSection /> */}
      <Youtube />
      <TestimonialSection />
      <Map />
    </>
  );
}
