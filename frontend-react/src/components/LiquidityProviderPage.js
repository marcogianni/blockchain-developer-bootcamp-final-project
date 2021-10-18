/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as R from "ramda";

import { useWeb3React } from "@web3-react/core";
import { infoNotification } from "notifications";
import { HeaderEmployer } from "components";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

import { useSalaries } from "hooks/useSalaries";
import { useDAI } from "hooks/useDAI";

import { warningNotification, successNotification } from "notifications";

const LiquidityProviderPage = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    liquidityProviderAllowance: 0,
    liquidityProviderBalance: null,
  });

  const { account } = useWeb3React();
  const { fetchAllowance, fetchBalanceOf, approve } = useDAI();

  const getAllowance = async () => {
    const liquidityProviderAllowance = await fetchAllowance();
    setState((s) => ({ ...s, liquidityProviderAllowance }));
  };

  useEffect(async () => {
    infoNotification("Account changed");

    getAllowance();

    const liquidityProviderBalance = await fetchBalanceOf();
    setState((s) => ({ ...s, liquidityProviderBalance }));
  }, [account]);

  const handleClick = async () => {
    const trx = await approve(setLoading);

    const error = R.pathOr(null, ["err", "error", "message"], trx);
    console.debug("TRX", { trx, error });

    if (error) {
      warningNotification(error);
    }

    successNotification("Allowance Updated");
    getAllowance();
  };

  return (
    <>
      <HeaderEmployer
        totalEmployees={null}
        liquidityProviderBalance={state.liquidityProviderBalance}
        liquidityProviderAllowance={state.liquidityProviderAllowance}
        isLiquidityProvider={true}
      />
      {Number(state.liquidityProviderAllowance) > 10000 && (
        <LoadingButton
          loading={loading}
          size="large"
          color="info"
          size="large"
          variant="contained"
          color={"secondary"}
          startIcon={<SpellcheckIcon />}
          onClick={handleClick}
          style={{ marginTop: 15 }}
        >
          Approve Smart Contract
        </LoadingButton>
      )}
    </>
  );
};

export default LiquidityProviderPage;
