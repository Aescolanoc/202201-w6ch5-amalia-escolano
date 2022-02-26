import { robotsConnect, mongoConnect } from './db.js';
import * as dotenv from 'dotenv';
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
        const result = await robotsConnect('robots');

        expect(result).toBeTruthy();
        expect(result()).toHaveProperty('_id');
        expect(result()).toHaveProperty('name');
        expect(result()).toHaveProperty('image');
        expect(result()).toHaveProperty('speed');
        expect(result()).toHaveProperty('strength');
        expect(result()).toHaveProperty('creationdate');
    });
});
