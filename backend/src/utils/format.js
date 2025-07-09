// Utility functions for formatting
export function formatAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatAmount(amount, decimals = 18) {
  if (!amount) return '0.00';
  try {
    return (Number(amount) / 10 ** decimals).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
  } catch {
    return amount;
  }
}
