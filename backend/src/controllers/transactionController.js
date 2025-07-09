import { getTransactions } from '../services/transactionService.js';

export const getUserTransactions = async (req, res) => {
  const { address } = req.params;
  try {
    const txs = await getTransactions(address);
    res.json(txs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
