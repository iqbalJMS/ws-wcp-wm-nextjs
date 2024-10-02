const { Crypt } = require('@strix/server')

const API_KEY = process.env.CLIENT_ID || ''
const SECRET = process.env.CLIENT_SECRET || ''

const apiKey = Crypt.AesClient(SECRET).encrypt(API_KEY)
const decrypted = Crypt.AesClient(SECRET).decrypt(apiKey)
if (API_KEY !== decrypted) {
    console.error('API Key not match')
    process.exit(1)
}

console.log('API Key: ', apiKey)
