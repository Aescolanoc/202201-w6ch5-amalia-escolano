import express from 'express';
const router = express.Router();
import { login } from '../controllers/login.controllers.js';

router.post('/', login);

export default router;
