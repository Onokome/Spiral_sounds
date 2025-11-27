import express from 'express'
import session from 'express-session'
import { productsRouter } from './routes/productsRoutes.js'
import { authRouter } from './routes/authRoutes.js'
import { meRouter } from './routes/meRoute.js'
import { cartRouter } from './routes/cart.js'

const app = express()
const PORT = 5000
const secret = process.env.SPIRAL_SESSION_SECRET || 'jellyfish-baskingshark'

app.use(express.json())

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
  httpOnly: true,
  secure: false,
  sameSite: 'lax'
  }
}))
 
app.use(express.static('public'))

app.use('/api/products', productsRouter)

app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)

app.use('/api/cart', cartRouter)
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 