import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";

import DAILogo from "svg/DAILogo";

const HeaderEmployer = ({
  totalEmployees = 0,
  liquidityProviderBalance = 0,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total employees</Typography>
            <Typography variant="h4">{totalEmployees}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              Liquidity Provider Balance
              <Tooltip
                title="If you connect the liquidity provider you will be able to approve the Salaries contract and set the allowance"
                arrow
              >
                <HelpIcon style={{ marginLeft: 10 }} />
              </Tooltip>
            </Typography>
            <Typography variant="h4">
              <span style={{ display: "flex" }}>
                <DAILogo style={{ width: 30, marginRight: 5 }} />
                {liquidityProviderBalance}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeaderEmployer;
