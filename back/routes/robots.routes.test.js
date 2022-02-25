const request = require('supertest');
const express = require('express');

const app = express();

describe('Given app connection', function () {
    afterEach(() => {
        mongoConnect.close();
    });
    test('connect to DB at port 8000 shpuld be ok', async () => {
        app.get('/robots', function (req, res) {
            res.status(200).json({});
        });

        const response = await request(app)
            .get('/robots')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
    test("GET /robots/62192281b1479b6332e8ce23 route returns 'This route get info about user 1'", async () => {
        app.get('/robots/62192281b1479b6332e8ce23', function (req, res) {
            res.status(200).json({});
        });
        const response = await request(app)
            .get('/robots/62192281b1479b6332e8ce23')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

export const mongoConnect = app.listen(8000, () => {
    console.log('Listening on 8000');
});
