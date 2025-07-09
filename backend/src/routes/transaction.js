import express from 'express';
import { getUserTransactions } from '../controllers/transactionController.js';

const router = express.Router();

// GET /api/transaction/:address
router.get('/:address', getUserTransactions);

export default router;
