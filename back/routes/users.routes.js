import express from 'express';
const router = express.Router();
import { insertUser } from '../controllers/user.controllers.js';

router.post('/', insertUser);

export default router;
