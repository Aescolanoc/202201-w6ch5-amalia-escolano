import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

import robotsRouter from './routes/robots.routes.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);

app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
