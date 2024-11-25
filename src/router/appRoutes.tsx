/* eslint-disable react-refresh/only-export-components */
import LayoutWrapper from "@/layouts";
import ErrorPage from "@/pages/404";

import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Team = lazy(() => import("@/pages/Team"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const GalleryDetail = lazy(() => import("@/pages/Gallery/GalleryDetail"));
const Services = lazy(() => import("@/pages/Service"));
const Career = lazy(() => import("@/pages/Career"));
const CareerDetails = lazy(() => import("@/pages/Career/CareerDetail"));
const ApplyForm = lazy(() => import("@/pages/Career/CareerDetail/ApplyForm"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));

export const appRoutes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "gallery/:slug",
        element: <GalleryDetail />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "careers",
        element: <Career />,
      },
      {
        path: "careers/:id",
        element: <CareerDetails />,
      },
      {
        path: "careers/apply",
        element: <ApplyForm />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
