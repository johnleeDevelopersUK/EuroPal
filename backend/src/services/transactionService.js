// Service for transaction logic (mocked for now)
export async function getTransactions(address) {
  // Replace with real DB or blockchain event query
  return [
    { txHash: '0xabc', from: address, to: '0x123', amount: '100', status: 'confirmed', createdAt: new Date() },
    { txHash: '0xdef', from: '0x456', to: address, amount: '50', status: 'confirmed', createdAt: new Date() }
  ];
}
