import React from "react";
import { useWeb3React } from "@web3-react/core";

import { ConnectPage, HomePage } from "components";

const Front = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  if (active) {
    return <HomePage />;
  }

  return <ConnectPage />;
};

export default Front;
