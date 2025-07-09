// Service for blockchain interactions
import { ethers } from 'ethers';

// Replace with your deployed EuroPal token contract address and ABI
const EUROPAL_TOKEN_ADDRESS = '0xYourEuroPalTokenAddress';
const EUROPAL_TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint256 amount) returns (bool)"
];

export function getProvider() {
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

export function getTokenContract(provider) {
  return new ethers.Contract(EUROPAL_TOKEN_ADDRESS, EUROPAL_TOKEN_ABI, provider);
}

export async function getBalance(address) {
  const provider = getProvider();
  const contract = getTokenContract(provider);
  return contract.balanceOf(address);
}
