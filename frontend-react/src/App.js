import { ToastContainer } from "react-toastify";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";

import Front from "./Front";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastContainer
        limit={4}
        autoClose={3500}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
      />
      <Front />
    </Web3ReactProvider>
  );
}

export default App;
