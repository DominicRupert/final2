export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://localhost:5001' : ''
export const useSockets = false
export const domain = 'dev-mvphoyti.us.auth0.com'
export const audience = 'https://DomDev.com'
export const clientId = 'W2aMF5UM64pgkw5jfATYDQT4GEU1ZPNB'