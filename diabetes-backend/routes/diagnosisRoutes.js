import express from 'express'
import { diagnose, getHistory } from '../controllers/diagnosisController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, diagnose)
router.get('/history', protect, getHistory)

export default router
