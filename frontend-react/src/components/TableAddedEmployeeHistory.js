import React, { useEffect } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useWeb3React } from "@web3-react/core";
import { useSalaries } from "hooks/useSalaries";

const rows = [];

const TableAddedEmployeeHistory = () => {
  const { account } = useWeb3React();
  const { fetchAddedEmployeeHistory } = useSalaries();

  useEffect(() => {
    const events = fetchAddedEmployeeHistory();
  }, []);
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
        History of added employees
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: 100 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ADDRESS</StyledTableCell>
              <StyledTableCell align="left">DATE ADDED</StyledTableCell>
              <StyledTableCell align="right">SALARY</StyledTableCell>
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

export default TableAddedEmployeeHistory;
