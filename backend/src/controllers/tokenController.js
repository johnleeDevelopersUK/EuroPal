import { ethers } from 'ethers';

// Replace with your deployed EuroPal token contract address and ABI
const EUROPAL_TOKEN_ADDRESS = '0xYourEuroPalTokenAddress';
const EUROPAL_TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function symbol() view returns (string)"
];

export const getEuroPalBalance = async (req, res) => {
  const { address } = req.params;
  try {
    // You can use a provider like Infura, Alchemy, or a local node
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const contract = new ethers.Contract(EUROPAL_TOKEN_ADDRESS, EUROPAL_TOKEN_ABI, provider);
    const balance = await contract.balanceOf(address);
    const symbol = await contract.symbol();
    res.json({ address, balance: balance.toString(), symbol });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
