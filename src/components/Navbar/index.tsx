import {
  Box,
  Button,
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

import { DefaultLogo } from "@/assets/logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "./navItems";

const Navbar = () => {
  const [isLessThan1250] = useMediaQuery("(max-width: 1250px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const navigate = useNavigate();
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
      <Container maxW={isLessThan1250 ? "99vw" : "90vw"}>
        <Flex py={4} justify={"space-between"} align={"center"}>
          <Box cursor={"pointer"} onClick={() => navigate("/")}>
            <DefaultLogo />
          </Box>
          <HStack gap={6} display={isLessThan800 ? "none" : "flex"}>
            {navItems.map(({ id, label, to }) => (
              <Box key={id}>
                {to === "/contact" ? (
                  <Button
                    as={NavLink}
                    to={"/contact"}
                    p={"8px"}
                    borderRadius={"2px"}
                    colorScheme="primary"
                  >
                    Let's Talk
                  </Button>
                ) : (
                  <Link
                    as={NavLink}
                    fontSize={isLessThan1250 ? "14px" : "20px"}
                    borderBottom={"2px"}
                    borderBottomWidth={"2px"}
                    borderBottomColor={"transparent"}
                    bgPosition="right bottom"
                    pb={"2px"}
                    _hover={{
                      borderBottomWidth: "3px",
                      borderBottomColor: "primary.500",
                    }}
                    _activeLink={{
                      borderBottomColor: "primary.500",
                      borderBottomWidth: "3px",
                    }}
                    key={id}
                    to={to}
                  >
                    {label}
                  </Link>
                )}
              </Box>
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
              <DrawerHeader
                borderBottomWidth="1px"
                display={"flex"}
                alignItems={"center"}
                justifySelf={"flex-end"}
              >
                <Flex justify={"space-between"} align={"center"}>
                  <Text fontSize={"2xl"}>Menu</Text>
                  <DrawerCloseButton size={"lg"} />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Flex py={20} flexDir={"column"} gap={8} align={"center"}>
                  {navItems.map(({ id, label, to }) => (
                    <Box key={id}>
                      {to === "/contact" ? (
                        <Button
                          as={NavLink}
                          to={"/contact"}
                          reloadDocument
                          p={"8px"}
                          borderRadius={"1px"}
                          variant="primary"
                        >
                          Let's Talk
                        </Button>
                      ) : (
                        <Link
                          as={NavLink}
                          borderBottom={"2px"}
                          borderBottomWidth={"2px"}
                          borderBottomColor={"transparent"}
                          bgPosition="right bottom"
                          onClick={onClose}
                          _hover={{
                            borderBottomWidth: "2px",
                            borderBottomColor: "primary",
                          }}
                          _activeLink={{
                            borderBottomColor: "primary",
                            borderBottomWidth: "2px",
                          }}
                          key={id}
                          to={to}
                        >
                          {label}
                        </Link>
                      )}
                    </Box>
                  ))}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Container>
  );
};

export default Navbar;
