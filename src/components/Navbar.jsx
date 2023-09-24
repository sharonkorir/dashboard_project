import { Flex, HStack, Heading, Spacer, Button, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as={"nav"} shadow={"md"} gap={"0.25rem"}>
      <HStack bg={"blackAlpha.800"} p={{ base: "0.25rem", md: "1rem" }}>
        <Heading color={"gray.200"} size={"md"}>
          PUY INFOTECH
        </Heading>
        {/* <Avatar /> */}
      </HStack>
      <HStack p={{ base: "0.25rem", md: "1rem" }}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
      <Spacer />
      <HStack>
        <Button colorScheme="gray" variant={"ghost"}>
          LOG IN
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
