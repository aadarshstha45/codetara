import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export const RootLayout = () => {
  return (
    <Flex flexDir={"column"} pos={"relative"} overflow={"hidden"}>
      <Navbar />

      <Outlet />

      <Footer />
    </Flex>
  );
};
