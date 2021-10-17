import React, { useEffect } from "react";
import * as R from "ramda";
import { useWeb3React } from "@web3-react/core";

import { ConnectPage, EmployerPage } from "components";
import { warningNotification } from "notifications";

const Front = () => {
  const { active, account, chainId, library, connector } = useWeb3React();
  console.debug("FRONT", { connector, account, library, chainId });

  useEffect(() => {
    if (!R.isNil(chainId) && chainId !== 4) {
      warningNotification("Please connect to Rinkeby Network");
    }
  }, [chainId]);

  if (!active) {
    return <ConnectPage />;
  }

  if (account === process.env.REACT_APP_EMPLOYER_ADDRESS) {
    return <EmployerPage />;
  }

  return <ConnectPage />;
};

export default Front;
