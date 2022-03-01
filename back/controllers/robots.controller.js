import * as crud from '../services/crud.js';
import { robotsCreator } from '../models/robot.model.js';
import { verifyToken } from '../services/auth.js';

const Robot = robotsCreator();

export const getAllRobots = (req, res) => {
    crud.getAllRobots(Robot).then((resp) => {
        res.json(resp);
    });
};

export const getRobot = (req, res) => {
    crud.getRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
export const insertRobot = (req, res) => {
    crud.insertRobot(req.body, Robot).then((resp) => {
        res.json(resp);
    });
};

export const updateRobot = (req, res) => {
    crud.updateRobot(req.params.id, req.body, Robot).then((resp) => {
        res.json(resp);
    });
};
export const deleteRobot = (req, res) => {
    crud.deleteRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};

export const protectRoute = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    let decodedToken;
    try {
        if (authorization && authorization.toLowerCase().startsWith('bearer')) {
            token = authorization.substring(7);
            decodedToken = verifyToken(token);
            if (typeof decodedToken === 'string') {
                throw new Error();
            }
            next();
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(401).json({
            error: 'token missing or invalid',
        });
    }
};
