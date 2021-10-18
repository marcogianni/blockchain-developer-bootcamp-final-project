import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import PropTypes from "prop-types";
import * as R from "ramda";
import Web3 from "web3";

import { address, ABI as ABIImplementation } from "contracts/Salaries";
import {
  address as ProxyContractAddress,
  ABI as ProxyABI,
} from "contracts/SalariesProxy";

export const EventsContext = React.createContext();

export const EventsContextProvider = ({ children }) => {
  const [contractObject, setContractObject] = useState({});

  const [EmployeeAdded, setEmployeeAdded] = useState([]);

  useEffect(() => {
    setupContract();
  }, []);

  useEffect(() => {
    getEmployeeAddedEvents();
  }, [contractObject]);

  const setupContract = async () => {
    let web3 = new Web3(
      new Web3.providers.WebsocketProvider(
        `wss://mainnet.infura.io/ws/v3/${process.env.REACT_APP_INFURA_API_KEY}`
      )
    );

    let contract = new web3.eth.Contract(
      ABIImplementation,
      ProxyContractAddress
    );

    setContractObject(contract);
  };

  const getEmployeeAddedEvents = async () => {
    if (!R.isEmpty(contractObject)) {
      contractObject
        .getPastEvents("EmployeeAdded", { fromBlock: 13325907 })
        .then((data) => {
          setEmployeeAdded(data);
          console.log("getEmployeeAddedEvents", data);
        });
    }
  };

  return (
    <EventsContext.Provider value={{ EmployeeAdded }}>
      {children}
    </EventsContext.Provider>
  );
};
