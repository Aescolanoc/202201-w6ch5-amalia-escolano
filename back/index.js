import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

import robotsRouter from './routes/robots.routes.js';
import loginRouter from './routes/login.routes.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);
app.use('/login', loginRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    console.log(err.message);
    resp.send({ error: err.message });
});

export const serverInstance = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
