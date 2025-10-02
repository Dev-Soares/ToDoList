import express from 'express';
import tasksController from '../controllers/tasksController.js';

const router = express.Router();

router.get('/tasks', tasksController.getAllTasks)

router.delete('/tasks/:id', tasksController.deleteTask)

router.post('/tasks', tasksController.createTask)

export default router;