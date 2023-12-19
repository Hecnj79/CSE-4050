import express from 'express';
const router = express.Router();

// Import the controllers
import index2 from '../app/controllers/taskTypeController.js';
import {index, update, create, deleteTask, register} from '../app/controllers/taskController.js';
import checkLogin from '../app/middlewares/auth.js';

// Define the routes
router.get('/tasks', checkLogin, index);
router.get('/task-types', checkLogin, index2);

router.put('/tasks/:task_id', checkLogin, update);

router.post('/tasks', checkLogin, create);

router.delete('/tasks/:task_id', checkLogin, deleteTask);

router.post('/user', register);

export default router;
