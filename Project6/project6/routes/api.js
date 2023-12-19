import express from 'express';
const router = express.Router();

// Import the controllers
import index2 from '../app/controllers/taskTypeController.js';
import {index, update, create, deleteTask} from '../app/controllers/taskController.js';

// Define the routes
router.get('/tasks', index);
router.get('/task-types', index2);

router.put('/tasks/:task_id', update);

router.post('/tasks', create);

router.delete('/tasks/:task_id', deleteTask);

export default router;
