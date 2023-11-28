import {
  Box,
  useTheme,
  Text,
  Button,
  VStack,
  Input,
  Divider,
  AbsoluteCenter,
  Flex,
  Select,
  FormControl,
  FormLabel,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { DarkButton } from "../components/DarkButton";
import illustration from "../assets/illustration.png";

export default function SignUp() {
  const theme = useTheme();

  const nameList = [
    { id: 1, name: "First Name", placeholder: "Enter your First Name here" },
    { id: 2, name: "Last Name", placeholder: "Enter your Last Name here" },
    {
      id: 3,
      name: "Company Name",
      placeholder: "Enter your Company Name here",
    },
  ];

  const addressList = [
    { id: 1, name: "Address Line 1", placeholder: "Enter your Address here" },
    { id: 2, name: "Address Line 2", placeholder: "Enter your Address here" },
  ];

  const addressList2 = [
    { id: 1, name: "Country", placeholder: "Select your country" },
    { id: 2, name: "State", placeholder: "Select your state" },
  ];

  const contactList = [
    { id: 1, name: "City", placeholder: "Enter your City here" },
    { id: 2, name: "Pincode", placeholder: "Enter your Pincode here" },
    { id: 3, name: "Email", placeholder: "Enter your Email here" },
    {
      id: 4,
      name: "Contact Number",
      placeholder: "Enter your Contact Number here",
    },
    { id: 5, name: "Password", placeholder: "Enter your Password here" },
    {
      id: 6,
      name: "Confirm Password",
      placeholder: "Confirm your Password here",
    },
  ];

  return (
    <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={{ lg: "6rem" }}>
      <Box
        bg={theme.colors.bg.black}
        w={{ base: "100%", md: "30%", lg: "25%" }}
        color="white"
        p={{ base: "1.5rem", md: "3rem 2rem 2rem 2rem" }}
        h="auto"
        position="relative"
      >
        <Text fontSize="xl" fontWeight="bold">
          Manage your inventory with Puy Infotech!
        </Text>

        <Image
          src={illustration}
          boxSize="20rem"
          objectFit="contain"
          position="absolute"
          bottom="20"
          left="26.5%"
          w="auto"
          display={{ base: "none", md: "block" }}
        />
      </Box>
      <Box
        h="auto"
        w={{ base: "100%", md: "70%", lg: "75%" }}
        p={{ base: "1.5rem", md: "6rem" }}
      >
        <Flex
          textAlign={{ base: "center", md: "right" }}
          mb="1.25rem"
          gap={1}
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Text>Already have an account?</Text>{" "}
          <Text as="button" color={theme.colors.bg.blue}>
            Sign in now!
          </Text>
        </Flex>
        <DarkButton text="Sign up with Google" icon={FcGoogle} width="100%" />
        <Box position="relative" py="8">
          <Divider />
          <AbsoluteCenter bg="white" px="6">
            or
          </AbsoluteCenter>
        </Box>
        <VStack spacing={6}>
          <Flex gap={5} width="100%" direction={{ base: "column", md: "row" }}>
            {nameList.map((input) => {
              return (
                <Box flex="1" key={input.id}>
                  <FormControl isRequired>
                    <FormLabel>{input.name}</FormLabel>
                    <Input
                      placeholder={input.placeholder}
                      backgroundColor={theme.colors.bg.lightGrey}
                      _placeholder={{ color: theme.colors.text.grey }}
                    />
                  </FormControl>
                </Box>
              );
            })}
          </Flex>
          <VStack spacing={6} align="stretch" width="100%">
            {addressList.map((input) => {
              return (
                <Box flex="1" key={input.id}>
                  <FormControl isRequired>
                    <FormLabel>{input.name}</FormLabel>
                    <Input
                      placeholder={input.placeholder}
                      backgroundColor={theme.colors.bg.lightGrey}
                      _placeholder={{ color: theme.colors.text.grey }}
                    />
                  </FormControl>
                </Box>
              );
            })}
          </VStack>

          <Flex
            width="100%"
            direction={{ base: "column", md: "row" }}
            gap={5}
            mb={5}
          >
            {addressList2.map((input) => {
              return (
                <Box flex="1" key={input.id}>
                  <FormControl isRequired>
                    <FormLabel>{input.name}</FormLabel>
                    <Select
                      placeholder={input.placeholder}
                      backgroundColor={theme.colors.bg.lightGrey}
                      _placeholder={{ color: theme.colors.text.grey }}
                      width={{ base: "100%", md: "50%" }}
                    ></Select>
                  </FormControl>
                </Box>
              );
            })}
          </Flex>
        </VStack>
        <SimpleGrid columns={2} spacing={5}>
          {contactList.map((input) => {
            return (
              <Box flex="1" key={input.id}>
                <FormControl isRequired>
                  <FormLabel>{input.name}</FormLabel>
                  <Input
                    placeholder={input.placeholder}
                    backgroundColor={theme.colors.bg.lightGrey}
                    _placeholder={{ color: theme.colors.text.grey }}
                  />
                </FormControl>
              </Box>
            );
          })}
        </SimpleGrid>
        <Box
          textAlign={{ base: "center", lg: "left" }}
          mt="2rem"
          mx={{ base: "auto", lg: "0" }}
        >
          <Button
            colorScheme="button"
            p={{
              base: "0.5rem 2rem 0.5rem 2rem",
              md: "1.25rem 4rem 1.25rem 4rem",
            }}
          >
            REGISTER
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
