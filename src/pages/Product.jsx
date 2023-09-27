import {
  Flex,
  Text,
  Box,
  Button,
  Input,
  useTheme,
  ButtonGroup,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import PhoneTable from "../components/PhoneTable";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import BarChart from "../components/charts/BarChart";
import ProductsTable from "../components/tables/ProductsTable";

export default function Product() {
  const theme = useTheme();
  return (
    <Box bg={theme.colors.bg.grey} p={"1rem"}>
      <Box m={"0.5rem"}>
        <Text>Dashboard/ Products</Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={0.7} bg={"white"} p={"1rem"} m={"0.5rem"}>
          <Text fontSize="lg" mb={"1rem"}>
            Products
          </Text>
          <InputGroup>
            <Input placeholder="Search" />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent={"space-evenly"} my={"1rem"}>
            <ButtonGroup spacing={0}>
              <Button colorScheme="teal" borderRightRadius={"0px"}>
                Active
              </Button>
              <Button
                variant={"ghost"}
                colorScheme="red"
                borderLeftRadius={"0px"}
              >
                Inactive
              </Button>
            </ButtonGroup>
            <ButtonGroup spacing={0}>
              <Button
                colorScheme="teal"
                rightIcon={<AddIcon />}
                borderRightRadius={"0px"}
              >
                Add New Prouct
              </Button>
              <Button
                colorScheme="messenger"
                rightIcon={<AddIcon />}
                borderLeftRadius={"0px"}
              >
                Add Supplier
              </Button>
            </ButtonGroup>
          </Flex>

          <ProductsTable />
        </Box>
        <Box flex={0.3} bg={"white"} p={"1rem"} m={"0.5rem"}>
          <Text fontSize="lg" mb={"1rem"}>
            Products Overview
          </Text>

          <BarChart />
        </Box>
      </Flex>
    </Box>
  );
}
