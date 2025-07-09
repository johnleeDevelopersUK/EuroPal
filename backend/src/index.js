import express from 'express';
import tokenRoutes from './routes/token.js';
import kycRoutes from './routes/kyc.js';
import transactionRoutes from './routes/transaction.js';
import authRoutes from './routes/auth.js';
import { connectDB } from './db.js';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('EuroPal Backend API is running');
});

app.use('/api/token', tokenRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
