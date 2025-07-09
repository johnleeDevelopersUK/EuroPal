import { checkKYC, submitKYC } from '../services/kycService.js';

export const checkKYCStatus = async (req, res) => {
  const { address } = req.params;
  try {
    const result = await checkKYC(address);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const submitKYCRequest = async (req, res) => {
  const { address } = req.params;
  try {
    const result = await submitKYC(address, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
