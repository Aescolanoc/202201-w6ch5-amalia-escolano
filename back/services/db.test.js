import { mongoConnect } from './db.js';
import * as dotenv from 'dotenv';
import { robotsCreator } from '../models/robot.model.js';
dotenv.config();

describe('Testing DB.js', function () {
    test('calling the function mongoConnect have a property ', async () => {
        const connect = await mongoConnect();
        expect(connect.connections[0]).toHaveProperty(
            'name',
            process.env.DBNAME
        );
    });

    test('calling the function robotsConnect and return the model', async () => {
        const result = await robotsCreator();
        expect(result).toBeTruthy();
    });
});
