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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import PhoneTable from "../components/tables/PhoneTable";
import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";

import { SearchIcon } from "@chakra-ui/icons";

export default function Purchase() {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.bg.grey} p={"1rem"}>
      <Box m={"0.5rem"}>
        <Text>Dashboard/ Purchase</Text>
      </Box>
      <Box bg={"white"} m={"0.5rem"} mb={"2rem"} p={"0.75rem"}>
        <LineChart />
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={0.7} bg={"white"} p={"1rem"} m={"0.5rem"}>
          <Text fontSize="lg" mb={"1rem"}>
            Purchase
          </Text>
          <InputGroup>
            <Input placeholder="Search" />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>

          <ButtonGroup spacing="6" my={"0.5rem"}>
            <Button colorScheme="teal">Received</Button>
            <Button variant={"ghost"} colorScheme="red">
              Not Received
            </Button>
          </ButtonGroup>
          <PhoneTable />
        </Box>
        <Box flex={0.3} bg={"white"} p={"1rem"} m={"0.5rem"}>
          <Text fontSize="lg" mb={"1rem"}>
            Purchases Overview
          </Text>
          <PieChart />
        </Box>
      </Flex>
    </Box>
  );
}
