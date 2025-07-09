import mongoose from 'mongoose';

const kycSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submittedAt: { type: Date, default: Date.now },
  reviewedAt: Date,
  reviewer: String
});

export default mongoose.model('KYC', kycSchema);
