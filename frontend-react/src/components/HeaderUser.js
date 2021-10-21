import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";

import DAILogo from "svg/DAILogo";

const HeaderUser = ({
  balance,
  salary,
  finalBalanceToWithdraw,
  monthsCount,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card style={{ background: "#f5ac37" }}>
          <CardContent>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              Monthly Salary
            </Typography>
            <Typography variant="h4">
              <span style={{ display: "flex" }}>
                <DAILogo style={{ width: 30, marginRight: 5 }} />
                {salary}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={9}>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              Current Balance
            </Typography>
            <Typography variant="h4">
              <span style={{ display: "flex" }}>
                <DAILogo style={{ width: 30, marginRight: 5 }} />
                {balance}
              </span>
            </Typography>
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
              Salary you can withdraw
            </Typography>
            <Typography variant="h4">
              <span style={{ display: "flex" }}>
                <DAILogo style={{ width: 30, marginRight: 5 }} />
                {finalBalanceToWithdraw}
              </span>
            </Typography>
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
              Accumulated Months
            </Typography>
            <Typography variant="h4">{monthsCount}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeaderUser;
