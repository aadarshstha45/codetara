import { lazy } from "react";

const HeroSection = lazy(() => import("./HeroSection"));
const ServiceSection = lazy(() => import("./ServiceSection"));
const StackSection = lazy(() => import("./StackSection"));
const PortfolioSection = lazy(() => import("./PortfolioSection"));
const ApproachSection = lazy(() => import("./ApproachSection"));
const TestimonialSection = lazy(() => import("./TestimonialSection"));
const Youtube = lazy(() => import("./Youtube"));

export {
  ApproachSection,
  HeroSection,
  PortfolioSection,
  ServiceSection,
  StackSection,
  TestimonialSection,
  Youtube,
};
