import React from "react";

import { useWeb3React } from "@web3-react/core";
import { injected } from "components/connectors";

import Button from "@mui/material/Button";

const HomePage = () => {
  const { deactivate } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <Button
      variant="outlined"
      size="large"
      style={{ padding: "15px 30px" }}
      onClick={disconnect}
    >
      Disconnect from Metamask
    </Button>
  );
};

export default HomePage;
