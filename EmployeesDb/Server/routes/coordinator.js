import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addCoordinator, getCoordinators, getCoordinator, updateCoordinator, deleteCoordinator } from '../controllers/coordinatorController.js'

const router = express.Router()
router.get('/', authMiddleware, getCoordinators)
router.post('/add', authMiddleware, addCoordinator)
router.get('/:id', authMiddleware, getCoordinator)
router.put('/:id', authMiddleware, updateCoordinator)
router.delete('/:id', authMiddleware, deleteCoordinator)

export default router