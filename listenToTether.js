const ethers = require("ethers");
const usdtABI = require("./abis/usdt.json");
require("dotenv").config();

/*
This script will listen to transfer events from the USDT token contract
*/

async function main() {
  const usdtAddress = "<token address>"; //replace with token contract address
  const provider = new ethers.providers.WebSocketProvider(
    `<provider and API Key>` //put here the provider link and API key
  );

  const contract = new ethers.Contract(usdtAddress, usdtABI, provider);

  contract.on("Transfer", (from, to, value, event) => {
    let info = {
      from: from,
      to: to,
      value: ethers.utils.formatUnits(value, 6),
      data: event,
    };
    console.log(JSON.stringify(info, null, 4));
  });
}

main();
