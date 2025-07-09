// Example: Seed the backend MongoDB database

const mongoose = require('mongoose');
const User = require('../backend/src/models/user');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/europal');
  await User.create({ address: '0x123...', password: 'test', kycStatus: 'approved' });
  console.log('Seeded user');
  await mongoose.disconnect();
}

seed().catch(console.error);
