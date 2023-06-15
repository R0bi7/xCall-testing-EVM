require('dotenv').config({path:__dirname+'/.env'})
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.OPERATOR_KEY!],
      allowUnlimitedContractSize: true
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_URL,
      accounts: [process.env.OPERATOR_KEY!],
      allowUnlimitedContractSize: true
    }
  }
};

export default config;
