import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const rows = [];

const TableEmployeesWithdrawals = () => {
  return (
    <>
      <Typography
        variant="h4"
        style={{
          color: "white",
          textTransform: "uppercase",
          letterSpacing: 1,
          textAlign: "left",
          marginTop: 50,
          marginBottom: 20,
          display: "block",
          fontWeight: "bold",
          fontSize: 25,
        }}
        component="span"
      >
        Latest employee withdrawals
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: 100 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>EMPLOYEE</StyledTableCell>
              <StyledTableCell align="right">AMOUNT</StyledTableCell>
              <StyledTableCell align="right">MONTH COUNT</StyledTableCell>
              <StyledTableCell align="right">WITHDRAWAL DATE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#2c2c2c",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "theme.palette.common.black",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

export default TableEmployeesWithdrawals;