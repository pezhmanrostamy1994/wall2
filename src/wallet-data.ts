/**
 * Wallet balances are intentionally kept in this file so they can be edited
 * without touching the UI. Amounts are token units, not USD values.
 */
export type WalletTokenKind = 'bitcoin' | 'tether' | 'tron' | 'ethereum' | 'bnb'

export type WalletTokenDefinition = {
  id: string
  name: string
  symbol: 'USDT' | 'BTC' | 'TRX' | 'ETH' | 'BNB'
  cmcId: number
  kind: WalletTokenKind
  fallbackPrice: number
}

export const walletTokenDefinitions: WalletTokenDefinition[] = [
  { id: 'tether', name: 'Tether', symbol: 'USDT', cmcId: 825, kind: 'tether', fallbackPrice: 1 },
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', cmcId: 1, kind: 'bitcoin', fallbackPrice: 67_000 },
  { id: 'tron', name: 'TRON', symbol: 'TRX', cmcId: 1958, kind: 'tron', fallbackPrice: 0.13 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', cmcId: 1027, kind: 'ethereum', fallbackPrice: 1_800 },
  { id: 'bnb', name: 'BNB Smart Chain', symbol: 'BNB', cmcId: 1839, kind: 'bnb', fallbackPrice: 600 },
]

export type WalletBalances = Partial<Record<WalletTokenDefinition['symbol'], number>>

export type WalletDefinition = {
  id: string
  name: string
  /** Wallet-specific receive/send identifier. Edit these values to use your own IDs. */
  address: string
  balances: WalletBalances
}

/**
 * Receiver IDs supplied for the next configuration step. They are deliberately
 * not assigned to a wallet or used by the application yet.
 */
export const pendingReceiverIds = [
  'TCPpnWhwYUpd42dMXiYuDFpr9oA4nnqsPj',
  'TDtqwVUbGg57k5wxDAwNLPQsmrARZTeRyj',
  'TLhPxGe64QmGyotgtKtBmrifkBauSSqvqf',
] as const

// No wallets are created with the application by default.
export const walletDefinitions: WalletDefinition[] = []
