import express from 'express';
import { getEuroPalBalance } from '../controllers/tokenController.js';

const router = express.Router();

// GET /api/token/balance/:address
router.get('/balance/:address', getEuroPalBalance);

export default router;
