import { useMemo } from "react";

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

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import productData from "../../data/productData.json";
import { Button, IconButton } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ProductsTable = () => {
  const data = useMemo(() => productData, []);
  //   console.log(productData, "product data");

  const columns = [
    { header: "Product Name", accessorKey: "name" },
    { header: "Manufacturer", accessorKey: "manufacturer" },
    { header: "Supplier", accessorKey: "supplier" },
    {
      Header: "Edit",
      accessorKey: "edit",
      Cell: ({ cell }) => (
        <IconButton
          aria-label="Edit product"
          icon={<EditIcon />}
          onClick={() => handleEdit(cell.row.original)}
        />
      ),
    },
    {
      header: "Delete",
      Cell: (object, _unused) => {
        return <EditIcon onUpdate={onUpdateStatus} object={object} />;
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.original.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.column.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
