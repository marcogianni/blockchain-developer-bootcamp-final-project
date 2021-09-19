// // TODO global react app state to track logged web3 info
// import React, { useState, useEffect, useContext } from "react";
// import { ethers, BigNumber } from "ethers";
// import * as R from "ramda";

// import { warningNotification, dangerNotification } from "notifications";

// export const Web3Context = React.createContext();

// export const Web3ContextProvider = ({ children }) => {
//   const [web3State, setWeb3State] = useState({
//     provider: null,
//     signer: null,
//     address: null,
//     chainId: null,
//     setupCompleted: false,
//   });

//   useEffect(() => {
//     setupWeb3((res) => {
//       console.debug("Web3ContextProvider.useEffect.setupWeb3.res", res);
//     });
//   }, []);

//   const setupWeb3 = async (callback) => {
//     if (typeof web3 === "undefined") {
//       warningNotification(
//         "Wallet not detected",
//         "You must login to a wallet to use this application"
//       );
//     } else {
//       await window.ethereum.enable();

//       let provider = new ethers.providers.Web3Provider(window.ethereum);
//       let network = await provider.getNetwork();
//       let chainId = network.chainId;
//       let signer = provider.getSigner(0);
//       let address = await signer.getAddress();

//       if (!address) {
//         callback(false);
//         return;
//       }

//       setWeb3State({
//         provider: provider,
//         signer: signer,
//         address: address,
//         chainId: chainId,
//         setupCompleted: true,
//       });
//     }
//   };

//   const handleLogin = (publicAddress, callback) => {
//     const existSigner = !R.isNil(web3State.signer);

//     if (existSigner) {
//       signMessage(publicAddress, callback);
//     } else {
//       // TODO
//       // Don't know if works
//       // setWeb3State doesn’t exactly update the state, but rather schedules a state update.
//       // if signer is null, can't sign messafe
//       setTimeout(() => {
//         signMessage(publicAddress, callback);
//       }, 1000);
//     }
//   };

//   const signMessage = (publicAddress, callback) => {
//     web3State?.signer?.signMessage(publicAddress).then((signature) => {
//       // send public adress and signature to login user
//     });
//   };

//   const actions = {
//     setWeb3State,
//     setupWeb3,
//     handleLogin,
//   };

//   return (
//     <Web3Context.Provider value={{ web3State, actions }}>
//       {children}
//     </Web3Context.Provider>
//   );
// };
