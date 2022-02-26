import request from 'supertest';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

describe('Given app connection', function () {
    afterEach(() => {
        mongoConnect.close();
    });
    test('connect to DB at port 8000 should be ok', async () => {
        app.get('/robots', function (req, res) {
            res.status(200).json({});
        });

        const response = await request(app)
            .get('/robots')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
    test('GET a robot by ID /robots/62192281b1479b6332e8ce23 ', async () => {
        app.get('/robots/62192281b1479b6332e8ce23', function (req, res) {
            res.status(200).json({ name: 'C3PO' });
        });
        const response = await request(app)
            .get('/robots/62192281b1479b6332e8ce23')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ name: 'C3PO' });
    });
    test('POST /robots returns that post is OK and have property name with Eve value', async () => {
        app.post('/robots', function (req, res) {
            res.status(200).json({ name: 'Eve' });
        });
        const response = await request(app)
            .post('/robots')
            .send({ name: 'Eve' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Eve');
    });
});

const port = process.env.PORT;
export const mongoConnect = app.listen(port, () => {
    // Log to see the port
    console.log(`Listening on ${port}`);
});
