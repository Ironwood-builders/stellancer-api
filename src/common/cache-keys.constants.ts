/**
 * Redis cache key constants for stellancer-api.
 * Convention: DOMAIN:ENTITY:IDENTIFIER
 */
export const CACHE_KEYS = {
  // Wallets
  WALLET_BY_ID: (id: string) => `wallets:id:${id}`,
  WALLETS_BY_USER: (userId: string) => `wallets:user:${userId}`,
  WALLET_BALANCE: (id: string) => `wallets:balance:${id}`,

  // Payouts
  PAYOUT_BY_ID: (id: string) => `payouts:id:${id}`,
  PAYOUTS_BY_WALLET: (walletId: string) => `payouts:wallet:${walletId}`,
  PAYOUTS_PENDING: () => `payouts:status:pending`,

  // Escrow
  ESCROW_BY_ID: (id: string) => `escrow:id:${id}`,
  ESCROWS_BY_WALLET: (walletId: string) => `escrow:wallet:${walletId}`,
} as const;

/** Default TTLs in seconds */
export const CACHE_TTL = {
  WALLET: 60,
  WALLET_BALANCE: 30,
  PAYOUT: 120,
  ESCROW: 120,
} as const;
