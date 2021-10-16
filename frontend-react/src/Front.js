import React, { useEffect } from "react";
import * as R from "ramda";
import { useWeb3React } from "@web3-react/core";

import { ConnectPage, EmployerPage } from "components";
import { warningNotification, infoNotification } from "notifications";

const Front = () => {
  const { active, account, chainId, library, connector } = useWeb3React();
  console.debug("FRONT", { connector, account, library, chainId });

  useEffect(() => {
    if (!R.isNil(chainId) && chainId !== 4) {
      warningNotification("Please connect to Rinkeby Network");
    }
  }, [chainId]);

  useEffect(() => {
    infoNotification("Account changed");
  }, [account]);

  if (!active) {
    return <ConnectPage />;
  }

  return <EmployerPage />;
};

export default Front;
