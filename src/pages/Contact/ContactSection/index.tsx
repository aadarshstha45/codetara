import { lazy } from "react";

const Section1 = lazy(() => import("./Section1"));
const Section2 = lazy(() => import("./Section2"));

export { Section1, Section2 };
