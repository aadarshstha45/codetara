import { lazy } from "react";

const Section1 = lazy(() => import("./Section1"));
const Section2 = lazy(() => import("./Section2"));
const Section3 = lazy(() => import("./Section3"));
const Section4 = lazy(() => import("./Section4"));
const Section5 = lazy(() => import("./Section5"));
const Section6 = lazy(() => import("./Section6"));

export { Section1, Section2, Section3, Section4, Section5, Section6 };
