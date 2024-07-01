import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Loader from "@/utils/Loader";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LayoutWrapper() {
  return (
    <Flex flexDir={"column"} overflow={"hidden"}>
      <NavBar />
      <Suspense
        fallback={<Loader color="secondary.500" emptyColor="transparent" />}
      >
        <Outlet />
      </Suspense>
      <Footer />
    </Flex>
  );
}

export default LayoutWrapper;
