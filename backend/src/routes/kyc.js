import express from 'express';
import { checkKYCStatus, submitKYCRequest } from '../controllers/kycController.js';

const router = express.Router();

// GET /api/kyc/:address
router.get('/:address', checkKYCStatus);
// POST /api/kyc/:address
router.post('/:address', submitKYCRequest);

export default router;
