import React, { useEffect } from "react";
import * as R from "ramda";
import { useWeb3React } from "@web3-react/core";

import { ConnectPage, EmployerPage } from "components";

import { warningNotification } from "notifications";

const Front = () => {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React();

  useEffect(() => {
    if (!R.isNil(chainId) && chainId !== 4) {
      warningNotification("Please connect to Rinkeby Network");
    }
  }, [chainId]);

  console.debug("FRONT", { connector, account, library, chainId });

  if (!active) {
    return <ConnectPage />;
  }

  return <EmployerPage />;
};

export default Front;
