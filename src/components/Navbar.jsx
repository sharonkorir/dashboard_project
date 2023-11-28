import {
  Flex,
  HStack,
  Spacer,
  Button,
  Text,
  useTheme,
  Image,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const theme = useTheme();

  const navLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
  ];
  return (
    <Flex as="nav" shadow="md" gap="0.25rem">
      <HStack bg={theme.colors.bg.black} px="1rem">
        <Image src={logo} />
      </HStack>
      <HStack
        p={{ base: "0.25rem", md: "1rem" }}
        gap="1rem"
        color={theme.colors.text.grey}
      >
        {navLinks.map((link) => {
          return (
            <Text key={link.id} as="button">
              {link.name}
            </Text>
          );
        })}
      </HStack>
      <Spacer />
      <HStack>
        <Button
          colorScheme="gray"
          variant="ghost"
          fontWeight="medium"
          fontSize="sm"
        >
          LOG IN
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
