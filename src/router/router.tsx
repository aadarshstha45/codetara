import { createBrowserRouter } from "react-router-dom";
import { CareerForm } from "../components/CareerDetailComponent/CareerForm";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { CareerDetails } from "../pages/CareerDetails";
import { Careers } from "../pages/Careers";
import { Contact } from "../pages/Contact";
import { Gallery } from "../pages/Gallery";
import { GalleryDetail } from "../pages/GalleryDetail";
import Home from "../pages/Home";
import { OurTeam } from "../pages/OurTeam";
import { Portfolio } from "../pages/Portfolio";
import { PortfolioSection } from "../pages/PortfolioSection";
import { Services } from "../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/careers",
        children: [
          {
            path: "/careers",
            element: <Careers />,
          },
          {
            path: "/careers/details/:id",
            element: <CareerDetails />,
          },
          {
            path: "/careers/apply",
            element: <CareerForm />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        children: [
          {
            path: "/gallery",
            element: <Gallery />,
          },
          {
            path: "/gallery/:slug",
            element: <GalleryDetail />,
          },
        ],
      },
      {
        path: "/portfolioSection",
        element: <PortfolioSection />,
      },
    ],
  },
]);
