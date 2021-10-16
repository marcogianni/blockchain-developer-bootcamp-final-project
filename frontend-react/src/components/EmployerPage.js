import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useWeb3React } from "@web3-react/core";
import { infoNotification } from "notifications";

import { DisplayPublicAddress } from "components";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left",
}));

const EmployerPage = () => {
  const { account } = useWeb3React();

  useEffect(() => {
    infoNotification("Account changed");
  }, [account]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total employees</Typography>
              <Typography variant="h4">28</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Liquidity Provider Balance</Typography>
              <Typography variant="h4">10,000 DAI</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <div style={{ position: "fixed", left: 20, bottom: 20 }}>
        <Fab variant="extended" color="primary">
          <AddIcon sx={{ mr: 1 }} />
          Add Employee
        </Fab>

        <Fab variant="extended" color="secondary" style={{ marginLeft: 10 }}>
          <AddIcon sx={{ mr: 1 }} />
          Remove Employee
        </Fab>
      </div>
    </>
  );
};

export default EmployerPage;
