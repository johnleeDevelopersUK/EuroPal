import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  kycStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  passwordHash: { type: String }, // for authentication
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
