// Simple logger utility
export function log(message, ...args) {
  console.log(`[${new Date().toISOString()}]`, message, ...args);
}

export function error(message, ...args) {
  console.error(`[${new Date().toISOString()}] ERROR:`, message, ...args);
}
