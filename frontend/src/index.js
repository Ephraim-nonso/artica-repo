import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const root = ReactDOM.createRoot(document.getElementById("root"));
const { chains, publicClient } = configureChains(
  [baseGoerli],
  [
    alchemyProvider({
      apiKey:
        "https://base-goerli.blastapi.io/9e6a5b81-c557-493b-9f40-4b4d19231b1a",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "ARTICA",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <Router>
          <App />
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
