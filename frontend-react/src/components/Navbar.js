/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useWeb3React } from "@web3-react/core";

import { address as ProxyContractAddress } from "contracts/SalariesProxy";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { DisplayPublicAddress } from "components";

import { useSalaries } from "hooks/useSalaries";

const Navbar = () => {
  const { deactivate, account, active } = useWeb3React();
  const { fetchInitialized } = useSalaries();

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  if (!active) return null;

  const displayMessage = () => {
    if (account === process.env.REACT_APP_EMPLOYER_ADDRESS) {
      return "Hi Employer";
    }

    if (account === process.env.REACT_APP_LIQUIDITY_PROVIDER_ADDRESS) {
      return "Hi Liquidity Provider";
    }

    return "Not Authorized";
  };

  const getInitialized = async () => {
    const initialized = await fetchInitialized();
    console.log("initialized", initialized);
  };

  getInitialized();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {displayMessage()}
            </Typography>

            {account === process.env.REACT_APP_EMPLOYER_ADDRESS &&
              !getInitialized() && (
                <Button
                  size="large"
                  color="warning"
                  variant="contained"
                  style={{ marginLeft: 10 }}
                  startIcon={<PlayArrowIcon />}
                >
                  Initialize
                </Button>
              )}

            <DisplayPublicAddress
              address={ProxyContractAddress}
              text="Smart Contract"
            />

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

export default Navbar;
