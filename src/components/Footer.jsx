import React from "react";
import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Heading,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
import { DarkButton } from "./DarkButton";

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Login" },
  ];

  const footerIcons = [
    { id: 1, icon: <FaFacebook /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <FaTwitter /> },
    { id: 4, icon: <FaLinkedin /> },
    { id: 5, icon: <FaYoutube /> },
  ];

  const contactList = [
    { id: 1, contact: "+91 7490044775(India)" },
    { id: 2, contact: "+33 769951365(France)" },
    { id: 3, contact: "+1(703) 220-7958(Canada)" },
  ];

  return (
    <Box
      bg={theme.colors.bg.black}
      alignItems="center"
      color={theme.colors.bg.grey}
    >
      <SimpleGrid minChildWidth="16rem" spacing="2.5rem" p="2rem">
        <Box height="auto" margin={{ base: "auto", lg: "2rem 0rem 0rem 4rem" }}>
          <Flex gap="1rem" marginBottom="2rem">
            <PhoneIcon />
            <Text>
              2nd Floor, Tridev Complex, above Rathi X Ray & Sonography Clinic,
              Udhana Darwaja, Surat, Gujarat 395002
            </Text>
          </Flex>
          <Flex gap="1rem" marginBottom="2rem">
            <EmailIcon />
            <Text>info@msquaretec.com</Text>
          </Flex>
          <Flex gap="1rem">
            <FaLocationDot />
            <Stack>
              {contactList.map((contact) => {
                return <Text key={contact.id}>{contact.contact}</Text>;
              })}
            </Stack>
          </Flex>
        </Box>
        <Box
          height="auto"
          margin={{ base: "auto", lg: "2rem 4rem 0rem auto" }}
          width="fit-content"
        >
          <Card maxW="sm" padding="1rem">
            <CardBody>
              <Stack mb="1.5rem">
                <Heading size="md" fontWeight="medium">
                  Subscribe to our Newsletter
                </Heading>

                <Text color={theme.colors.text.grey} fontSize="md" mt="1rem">
                  Enter your email address here!
                </Text>
                <Input
                  placeholder="Email Address"
                  variant="filled"
                  backgroundColor={theme.colors.bg.lightGrey}
                  _placeholder={{ color: theme.colors.text.grey }}
                ></Input>
              </Stack>
              <DarkButton text="Subscribe" width="100%" />
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
      <Flex
        gap={{ base: "2rem", md: "4rem", lg: "8rem" }}
        as="center"
        alignItems="center"
        justifyContent="center"
        p="2rem"
      >
        {" "}
        {footerIcons.map((icon) => {
          return (
            <Box key={icon.id} as="button">
              {icon.icon}
            </Box>
          );
        })}
      </Flex>
      <Flex
        gap={{ base: "2rem", md: "7rem", lg: "14rem" }}
        as="center"
        alignItems="center"
        justifyContent="center"
        p="2rem"
      >
        {footerLinks.map((link) => {
          return (
            <Text as="button" key={link.id}>
              {link.name}
            </Text>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Footer;
