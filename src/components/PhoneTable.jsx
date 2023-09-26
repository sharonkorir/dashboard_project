import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import smartphoneData from "../data/smartphones";

export default function PhoneTable() {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Supplier</Th>
            <Th isNumeric>Purchase price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {smartphoneData.map((phone) => (
            <Tr key={phone.id}>
              <Td>{phone.name}</Td>
              <Td>{phone.supplier}</Td>
              <Td isNumeric>{phone.purchasePrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
