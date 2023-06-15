import { ethers } from "hardhat";

async function main() {
  const callService = process.env.BSC_TESTNET_XCALL_ADDRESS;

  console.log(`callService = ${callService}`);

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.deployed();

  console.log(
    `HelloWorld with callService ${callService} deployed to ${helloWorld.address}`
  );

  await helloWorld.initialize(callService!);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
