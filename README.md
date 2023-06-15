# xCall testing EVM

This project demonstrates a basic xCall use case. It comes with a showcase contract and a script that deploys that contract to Sepolia (ETH testnet) and BSC testnet.

Deployment scripts execution:

```shell
// deploy to BSC testnet 
npx hardhat run --network bsc_testnet ./scripts/deployBscTestnet.ts

 // deploy to Sepolia (ETH testnet)
npx hardhat run --network sepolia ./scripts/deploySepolia.ts
```

## Environment

You should create .env file in the root of your project and include following environment variables:

```
SEPOLIA_URL="https://sepolia.infura.io/v3/ffbf8ebe228f4758ae82e175640275e0"
SEPOLIA_XCALL_ADDRESS="0x9B68bd3a04Ff138CaFfFe6D96Bc330c699F34901"
BSC_TESTNET_URL="https://data-seed-prebsc-1-s1.binance.org:8545"
BSC_TESTNET_XCALL_ADDRESS="0x6193c0b12116c4963594761d859571b9950a8686"
OPERATOR_KEY="<YOUR-PRIVATE-KEY>"
```

**Note** You should replace `<YOUR-PRIVATE-KEY>` with your own private key.

For more information contact me at [Telegram](t.me/robibobi7).