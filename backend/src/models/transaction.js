import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  txHash: { type: String, required: true, unique: true },
  from: String,
  to: String,
  amount: String,
  status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
