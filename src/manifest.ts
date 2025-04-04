import { WalletManifest } from "./types/wallet";

export const manifest: { wallets: WalletManifest[] } = {
  wallets: [
    {
      id: "hot-wallet",
      platform: ["android", "ios", "web"],
      name: "Hot Wallet",
      icon: "https://app.hot-labs.org/images/hot/hot-icon.png",
      description: "Hot Wallet is a wallet that allows you to send and receive NEAR.",
      website: "https://hot-labs.org/wallet",
      version: "1.0.0",
      executor: "/hotwallet.js",
      type: "sandbox",
    },
    {
      id: "mynearwallet",
      platform: ["android", "ios", "web"],
      name: "MyNearWallet",
      icon: "https://www.mynearwallet.com/images/webclip.png",
      description: "Web wallet for NEAR.",
      website: "https://mynearwallet.com",
      version: "1.0.0",
      executor: "/mnw.js",
      type: "sandbox",
    },
    {
      id: "ledger",
      platform: ["android", "ios", "web"],
      name: "Ledger",
      icon: "https://img.cryptorank.io/coins/ledger1673447427161.png",
      description: "Ledger is a wallet that allows you to send and receive NEAR.",
      website: "https://ledger.com",
      version: "1.0.0",
      executor: "/ledger.js",
      type: "sandbox",
    },
  ],
};
