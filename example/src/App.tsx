import { FC, useEffect, useState } from "react";
import { WalletSelector, WalletSelectorUI, NearWallet } from "../../src";
import "../../src/styles.css";

const selector = new WalletSelector();
const modal = new WalletSelectorUI(selector);

export const ExampleNEAR: FC = () => {
  const [wallet, setWallet] = useState<NearWallet>();
  const [walletId, setWalletId] = useState<string>();

  useEffect(() => {
    selector.wallet().then((wallet) => {
      wallet.getAccounts().then((t) => {
        setWalletId(t[0].accountId);
        setWallet(wallet);
      });
    });

    selector.on("signedIn", async (t) => {
      setWallet(await selector.wallet());
      setWalletId(t.accounts[0].accountId);
    });

    selector.on("signedOut", async () => {
      setWallet(undefined);
      setWalletId(undefined);
    });
  }, []);

  const connect = async () => {
    if (wallet) return selector.disconnect();
    modal.open();
  };

  return (
    <div className="view">
      <p>NEAR Example</p>
      <button onClick={() => connect()}>{walletId ? walletId : "Connect"}</button>
      {walletId != null && <SignMessage wallet={wallet!} />}
    </div>
  );
};

const SignMessage = ({ wallet }: { wallet: NearWallet }) => {
  const singMessage = async () => {
    const nonce = Buffer.from(window.crypto.getRandomValues(new Uint8Array(32)));
    const result = await wallet.signMessage?.({ message: "Hello", recipient: "Demo app", nonce });
    alert(`Is verfiied: ${result?.signature}`);
  };

  const sendTx = async () => {
    wallet.signAndSendTransaction({
      receiverId: "demo.near",
      actions: [{ type: "Transfer", params: { deposit: "0" } }],
    });
  };

  return (
    <>
      <button onClick={() => singMessage()}>Sign message</button>
      <button onClick={() => sendTx()}>Send tx</button>
    </>
  );
};
