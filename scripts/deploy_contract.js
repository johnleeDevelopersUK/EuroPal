// Example: Deploy a smart contract using ethers.js

const { ethers } = require('ethers');

async function main() {
  // Update with your provider and contract details
  const provider = new ethers.JsonRpcProvider('http://localhost:8545');
  const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
  const factory = new ethers.ContractFactory(
    require('../contracts/EuroPalToken.json').abi,
    require('../contracts/EuroPalToken.json').bytecode,
    wallet
  );
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log('Contract deployed at:', contract.target);
}

main().catch(console.error);
