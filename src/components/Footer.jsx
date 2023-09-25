import React from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  CardFooter,
  Heading,
  Input,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, WarningIcon } from "@chakra-ui/icons";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { DarkButton } from "./DarkButton";

const Footer = () => {
  return (
    <Box bg={"blackAlpha.800"} alignItems="center" color={"gray.200"}>
      <SimpleGrid minChildWidth="16rem" spacing="2.5rem" p={"2rem"}>
        <Box height="auto" margin={"2rem"}>
          <Flex gap={"1rem"} marginBottom={"2rem"}>
            <PhoneIcon />
            <Text>
              2nd Floor, Tridev Complex, above Rathi X Ray & Sonography Clinic,
              Udhana Darwaja, Surat, Gujarat 395002
            </Text>
          </Flex>
          <Flex gap={"1rem"} marginBottom={"2rem"}>
            <EmailIcon />
            <Text>info@msquaretec.com</Text>
          </Flex>
          <Flex gap={"1rem"}>
            <PhoneIcon />
            <Stack>
              <Text>+91 7490044775(India)</Text>
              <Text>+33 769951365(France)</Text>
              <Text>+1(703) 220-7958(Canada)</Text>
            </Stack>
          </Flex>
        </Box>
        <Box height="auto" as="center" margin={"2rem"}>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Subscribe to our Newsletter</Heading>

                <Text color="gray.500">Enter your email address here!</Text>
                <Input placeholder="Email Address" variant="filled"></Input>
              </Stack>
            </CardBody>
            <CardFooter>
              {/* <Button width={"100%"}>Subcribe</Button> */}
              <DarkButton text={"Subscribe"} width={"100%"} />
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
      {/* <Spacer /> */}
      <Flex
        gap={{ base: "2rem", md: "4rem", lg: "8rem" }}
        as="center"
        alignItems={"center"}
        justifyContent={"center"}
        p={"2rem"}
      >
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        <FaYoutube />
        {/* <Spacer /> */}
      </Flex>
      <Flex
        // gap={"14rem"}
        gap={{ base: "2rem", md: "7rem", lg: "14rem" }}
        as="center"
        alignItems={"center"}
        justifyContent={"center"}
        p={"2rem"}
      >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>Login</Text>
        {/* <Spacer /> */}
      </Flex>
    </Box>
  );
};

export default Footer;
