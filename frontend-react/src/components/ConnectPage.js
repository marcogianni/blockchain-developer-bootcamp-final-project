import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import Button from "@mui/material/Button";

import Metamask from "svg/Metamask";
import ConsenSys from "svg/ConsenSys";

import { injected } from "components/connectors";

const ConnectPage = () => {
  const { activate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.error("ConnectPage.connect.error", err);
    }
  }

  return (
    <StyledConnectPage>
      <ConsenSys
        style={{
          fill: "#1976d2",
          width: 200,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 0,
        }}
      />

      <Button
        variant="contained"
        size="large"
        startIcon={<Metamask style={{ width: 30 }} />}
        style={{ padding: "15px 30px" }}
        onClick={connect}
      >
        Connect to Metamask
      </Button>
    </StyledConnectPage>
  );
};

const StyledConnectPage = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeef3;

  .card {
    padding: 40px;
    background-color: white;
  }
`;

export default ConnectPage;
