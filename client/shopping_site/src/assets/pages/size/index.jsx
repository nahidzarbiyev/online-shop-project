import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "", minWidth: 170 },
  { id: "code", label: "", minWidth: 100 },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "",
    label: "",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData(
    "US - Erkek",
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
    14,
    14.5,
    15,
    15.5,
    16,
    16.5,
    17,
    17.5,
    18,
    18.5,
    19,
    19.5,
    20,
    20.5,
    21,
    21.5,
    22
  ),
  createData(
    "US - Kadın",
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
    14,
    14.5,
    15,
    15.5,
    16,
    16.5,
    17,
    17.5,
    18,
    18.5,
    19,
    19.5,
    20,
    20.5,
    21,
    21.5,
    22,
    22.5,
    23,
    23.5
  ),
  createData(
    "UK",
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
    14,
    14.5,
    15,
    15.5,
    16,
    16.5,
    17,
    17.5,
    18,
    18.5,
    19,
    19.5,
    20,
    20.5,
    21
  ),
  createData(
    "CM / JP",
    22.5,
    23,
    23.5,
    23.5,
    24,
    24,
    24.5,
    25,
    25.5,
    26,
    26.5,
    27,
    27.5,
    28,
    28.5,
    29,
    29.5,
    30,
    30.5,
    31,
    31.5,
    32,
    32.5,
    33,
    33.5,
    34,
    34.5,
    35,
    35.5,
    36,
    36.5,
    37,
    37.5,
    38,
    38.5,
    39,
    39.5,
    40
  ),
  createData(
    "EU",
    35.5,
    36,
    36.5,
    37.5,
    38,
    38.5,
    39,
    40,
    40.5,
    41,
    42,
    42.5,
    43,
    44,
    44.5,
    45,
    45.5,
    46,
    47,
    47.5,
    48,
    48.5,
    49,
    49.5,
    50,
    50.5,
    51,
    51.5,
    52,
    52.5,
    53,
    53.5,
    54,
    54.5,
    55,
    55.5,
    56,
    56.5
  ),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
