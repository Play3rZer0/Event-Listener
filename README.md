Event listener

This script will listen to transfer events from the USDT token contract.
The token address can be replaced with another contract address for
listening to events that are emitted from a deployed contract on the
Ethereum blockchain.

You will need the following:

- Token Contract Address
- Web Socket provider
- Endpoint API Key (e.g. Infura, Alchemy)
- Contract ABI

NOTE: It is recommended to use the dotenv library to mask your API Key as an
environment variable. If not, then the API Key will be exposed if the source
is in a public repository.

==================

This project was developed using the Hardhat development environment with
NodeJS and the Ethers.js library.

To get started, you need to create a root folder for this project, then clone this
repository to your local computer.

Then, from the root folder, run:

> npm install

To run the listener, open the file 'listenToTether.js' using node.

> node listenToTether.js

==================
Here is the example of output from running the script:

"from": "0x835005BE4BEEFdEF34Da8697fa1482409210668b",
"to": "0x4ed1f0C43B428Ae46460a10E5a7fB2CbA161b2F4",
"value": "100.0",
"data": {
"blockNumber": 16940350,
"blockHash": "0xc1ff75ab5addee4f9d192dacad0cb96b96857b0130c10cbd8948c9ff720580c3",
"transactionIndex": 141,
"removed": false,
"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
"data": "0x0000000000000000000000000000000000000000000000000000000005f5e100",
"topics": [
"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
"0x000000000000000000000000835005be4beefdef34da8697fa1482409210668b",
"0x0000000000000000000000004ed1f0c43b428ae46460a10e5a7fb2cba161b2f4"
],
"transactionHash": "0xcdccc06f13f0f300e6072694571c5853fdbbc6e829c16c43715e3a6a673c7c7f",
"logIndex": 300,
"event": "Transfer",
"eventSignature": "Transfer(address,address,uint256)",
"args": [
"0x835005BE4BEEFdEF34Da8697fa1482409210668b",
"0x4ed1f0C43B428Ae46460a10E5a7fB2CbA161b2F4",
{
"type": "BigNumber",
"hex": "0x05f5e100"
}
]
}

The output returns data from the blockchain of 'Transfer' events. You can also
find this information from the Etherscan explorer.

https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7

Look under Events -> Transfer.
