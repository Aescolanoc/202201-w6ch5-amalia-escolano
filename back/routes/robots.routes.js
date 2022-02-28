import express from 'express';
const router = express.Router();

import {
    protectRoute,
    getAllRobots,
    getRobot,
    insertRobot,
    updateRobot,
    deleteRobot,
} from '../controllers/robots.controller.js';

router.get('/robots', protectRoute, getAllRobots);
router.get('/:id', getRobot);
router.post('/', insertRobot);
router.patch('/:id', updateRobot);
router.delete('/:id', deleteRobot);

export default router;
