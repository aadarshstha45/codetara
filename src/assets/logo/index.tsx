import { Image } from "@chakra-ui/react";
import LogoBlack from "./BlackLogo.png";
import LogoDefault from "./DefaultLogo.png";
import LogoWhite from "./WhiteLogo.png";

export const WhiteLogo = () => {
  return <Image w={"166px"} h={"68px"} src={LogoWhite} alt="White Logo" />;
};
export const BlackLogo = () => {
  return <Image w={"166px"} h={"68px"} src={LogoBlack} alt="White Logo" />;
};

export const DefaultLogo = () => {
  return <Image w={"166px"} h={"68px"} src={LogoDefault} alt="White Logo" />;
};
