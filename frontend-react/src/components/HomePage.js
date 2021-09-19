import React from "react";
import * as R from "ramda";

import { useWeb3React } from "@web3-react/core";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";

import { DisplayPublicAddress } from "components";

const HomePage = () => {
  const { deactivate, account } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hi Davide.
            </Typography>

            <DisplayPublicAddress address={account} />

            <Tooltip
              enterTouchDelay={300}
              placement="bottom"
              title={"Disconnect"}
              arrow
            >
              <Button
                size="large"
                color="warning"
                variant="contained"
                style={{ marginLeft: 10 }}
              >
                <LogoutIcon onClick={disconnect} />
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HomePage;
