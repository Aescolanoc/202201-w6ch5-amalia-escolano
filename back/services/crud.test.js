import { robotsCreator } from '../models/robot.model.js';
import * as robotsSrv from './crud.js';

describe('when a collection is defined and populated', () => {
    let robotModel;
    let initialCount = 1;
    let first_id;
    const collection = 'robotstests';
    beforeAll(async () => {
        robotModel = await robotsCreator(collection);
    });

    afterAll(async () => {
        await robotModel.deleteMany({ name: 'Test robot 1' });
    });

    test('should connect to the collection', async () => {
        expect(robotModel).toBeTruthy();
        expect(robotModel.modelName).toBe(collection);
    });

    test('should create a robot', async () => {
        const robot = {
            name: 'Test robot 1',
            image: 'https://i.imgur.com/sEPM6Is.png',
            strength: 10,
            speed: 5,
            creationdate: 1989,
        };

        const result = await robotsSrv.insertRobot(robot, robotModel);
        first_id = result._id;
        expect(result.speed).toBe(5);
        expect(result.name).toBe('Test robot 1');
    });

    test('should get one robot', async () => {
        const result = await robotsSrv.getRobot(first_id, robotModel);
        expect(result._id.toString).toBe(first_id.toString);
        expect(result.name).toBe('Test robot 1');
    });

    test('should get all the robots', async () => {
        const result = await robotsSrv.getAllRobots(robotModel);
        expect(result.length).toBe(initialCount);
    });

    test('should update a robot', async () => {
        const result = await robotsSrv.updateRobot(
            first_id,
            { speed: 5 },
            robotModel
        );
        expect(result._id.toString).toBe(first_id.toString);
        expect(result.speed).toBe(5);
    });

    test('should delete one robot', async () => {
        await robotsSrv.deleteRobot(first_id, robotModel);
        const isDeleted = robotModel.findById(first_id);
        expect(isDeleted).toBeTruthy();
    });
});
