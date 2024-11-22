import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'
import {
    addProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

// Route to get all projects
router.get('/', authMiddleware, getProjects);

// Route to get a specific project by ID
router.get('/:id', authMiddleware, getProject);

// Route to add a new project
router.post('/add', authMiddleware, addProject);

// Route to update an existing project by ID
router.put('/:id', authMiddleware, updateProject);

// Route to delete a project by ID
router.delete('/:id', authMiddleware, deleteProject);

export default router;
