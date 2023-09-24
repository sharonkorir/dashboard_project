import {
  Box,
  useTheme,
  Text,
  Highlight,
  Button,
  Icon,
  VStack,
  Input,
  Divider,
  AbsoluteCenter,
  Flex,
  Select,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { DarkButton } from "../components/DarkButton";

export default function SignUp() {
  const theme = useTheme();
  // const InputGroup = ({ label, placeholder }) => {};

  return (
    <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={{ lg: "6rem" }}>
      <Box
        bg={theme.colors.bg.black}
        w={{ base: "100%", md: "30%", lg: "20%" }}
        color={theme.colors.bg.grey}
        p={{ base: "1.5rem", md: "3rem 1.5rem 1.5rem 1.5rem" }}
        h="auto"
      >
        <Text fontSize="xl">Manage your inventory with Puy Infotech!</Text>
      </Box>
      <Box
        h="auto"
        w={{ base: "100%", md: "70%", lg: "80%" }}
        p={{ base: "1.5rem", md: "6rem" }}
      >
        <Box textAlign={{ base: "center", md: "right" }}>
          <Highlight
            query="Sign in now!"
            styles={{ color: theme.colors.bg.blue }}
          >
            Already have an account? Sign in now!
          </Highlight>
        </Box>
        <DarkButton text="Sign up with Google" icon={FcGoogle} width={"100%"} />
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            or
          </AbsoluteCenter>
        </Box>
        <VStack spacing={8}>
          <Flex
            gap={5}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
          >
            <Box flex={"1"}>
              <Text mb="8px">First Name</Text>

              <Input
                variant={"filled"}
                placeholder="Enter your First Name here"
                required
              />
            </Box>
            <Box flex={"1"}>
              <Text mb="8px">Last Name</Text>

              <Input
                variant={"filled"}
                placeholder="Enter your Last Name here"
                required
              />
            </Box>
            <Box flex={"1"}>
              <Text mb="8px">Company Name</Text>

              <Input
                variant={"filled"}
                placeholder="Enter your Company Name here"
                required
              />
            </Box>
          </Flex>
          <VStack spacing={4} align="stretch" width={"100%"}>
            <Box>
              <Text>Address Line 1</Text>
              <Input variant={"filled"} placeholder="Enter your Address here" />
            </Box>
            <Box>
              <Text>Address Line 2</Text>
              <Input variant={"filled"} placeholder="Enter your Address here" />
            </Box>
          </VStack>

          <Flex
            gap={5}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
          >
            <Box flex="1">
              <Text>Country</Text>
              <Select
                placeholder="Select your country"
                variant={"filled"}
                width={{ base: "100%", md: "50%" }}
              ></Select>
            </Box>
            <Box flex="1">
              <Text>State</Text>
              <Select
                placeholder="Select your state"
                variant={"filled"}
                width={{ base: "100%", lg: "50%" }}
              ></Select>
            </Box>
          </Flex>
          <Flex
            gap={5}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
          >
            <Box flex="1">
              <Text>City</Text>
              <Input variant={"filled"} placeholder={"Enter your City here"} />
            </Box>
            <Box flex="1">
              <Text>Pincode</Text>
              <Input
                variant={"filled"}
                placeholder={"Enter your Pincode here"}
              />
            </Box>
          </Flex>
          <Flex
            gap={5}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
          >
            <Box flex="1">
              <Text>E-mail Address</Text>
              <Input
                variant={"filled"}
                placeholder={"Enter your E-mail Address here"}
              />
            </Box>
            <Box flex="1">
              <Text>Contact Number</Text>
              <Input
                variant={"filled"}
                placeholder={"Enter your Contact Number here"}
              />
            </Box>
          </Flex>
          <Flex
            gap={5}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
          >
            <Box flex="1">
              <Text>Password</Text>
              <Input
                variant={"filled"}
                placeholder={"Enter your Password here"}
              />
            </Box>
            <Box flex="1">
              <Text>Confirm Password</Text>
              <Input
                variant={"filled"}
                placeholder={"Confirm your Password here"}
              />
            </Box>
          </Flex>
        </VStack>
        <Box
          textAlign={{ base: "center", lg: "left" }}
          mt="2rem"
          mx={{ base: "auto", lg: "0" }}
        >
          <Button colorScheme="teal" px={{ base: "2rem", md: "4rem" }}>
            REGISTER
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
