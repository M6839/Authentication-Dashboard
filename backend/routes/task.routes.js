import express from 'express';
import {
createTask,
getTasks,
updateTask,
deleteTask
} from '../controllers/task.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = express.Router();


router.use( authMiddleware);
router.route('/').get(getTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deleteTask);


export default router;