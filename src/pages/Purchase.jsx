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
  useTheme,
  ButtonGroup,
} from "@chakra-ui/react";
import PhoneTable from "../components/PhoneTable";

export default function Purchase() {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.bg.grey} p={"1rem"}>
      <Text>Dashboard/ Purchase</Text>
      <Box>Box 1</Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={0.75} bg={"white"} p={"1rem"}>
          <Text>Purchase</Text>
          <Input placeholder="Search" />
          <ButtonGroup spacing="6">
            <Button colorScheme="teal">Received</Button>
            <Button variant={"ghost"} colorScheme="red">
              Not Received
            </Button>
          </ButtonGroup>
          <PhoneTable />
        </Box>
        <Box bg={"yellow"} flex={"0.25"}>
          <Box>box 2</Box>
        </Box>
      </Flex>
    </Box>
  );
}
