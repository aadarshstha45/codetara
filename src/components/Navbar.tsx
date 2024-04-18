import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { DefaultLogo } from "../assets/logo";
import { navItems } from "../data/navItems";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container
      maxW={"100vw"}
      bg={"#fff"}
      boxShadow={"sm"}
      // position={"sticky"}
      top={0}
      zIndex={10}
      borderBottom={"1px"}
      borderColor={"#e0e0e0"}
    >
      <Flex
        py={4}
        px={isLessThan800 ? 4 : 10}
        justify={"space-between"}
        align={"center"}
      >
        <DefaultLogo />

        <HStack gap={10} display={isLessThan800 ? "none" : "flex"}>
          {navItems.map(({ id, label, to }) => (
            <Link
              _hover={{ borderBottom: "2px", borderColor: "blue.500" }}
              as={NavLink}
              fontSize={"xl"}
              borderBottom={"2px"}
              borderColor={"transparent"}
              _activeLink={{ borderBottom: "2px", borderColor: "blue.500" }}
              key={id}
              to={to}
            >
              {label}
            </Link>
          ))}
        </HStack>
        <IconButton
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          display={isLessThan800 ? "flex" : "none"}
          aria-label="menu"
          fontSize={"2xl"}
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />

        <Drawer
          size={"full"}
          placement="right"
          isOpen={isOpen}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" justifySelf={"flex-end"}>
              <Flex justify={"space-between"} align={"center"}>
                <Text fontSize={"2xl"}>Menu</Text>
                <DrawerCloseButton size={"lg"} />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Flex flexDir={"column"} gap={8} align={"center"}>
                {navItems.map(({ id, label, to }) => (
                  <Link
                    _hover={{ borderBottom: "2px", borderColor: "blue.500" }}
                    as={NavLink}
                    fontSize={"xl"}
                    borderBottom={"2px"}
                    borderColor={"transparent"}
                    _activeLink={{
                      borderBottom: "2px",
                      borderColor: "blue.500",
                    }}
                    key={id}
                    to={to}
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
};
