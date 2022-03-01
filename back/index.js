import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import robotsRouter from './routes/robots.routes.js';
import loginRouter from './routes/login.routes.js';
import { mongoConnect } from './services/db.js';
import usersRouter from './routes/users.routes.js';

dotenv.config();
import * as dotenv from 'dotenv';

const app = express();
const port = process.env.PORT;

await mongoConnect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);
app.use('/login', loginRouter); // Se devuelve el token si existe el usuario
app.use('/users', usersRouter); // crea el usuario

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    console.log(err.message);
    resp.send({ error: err.message });
});

export const serverInstance = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
