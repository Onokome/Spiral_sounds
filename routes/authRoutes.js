import { registerUser, loginUser, logoutUser } from '../controllers/authControllers.js'
import express from 'express'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)