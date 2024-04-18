import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <Flex flexDir={"column"}>
      <Navbar />

      <Outlet />
      <Footer />
    </Flex>
  );
};
