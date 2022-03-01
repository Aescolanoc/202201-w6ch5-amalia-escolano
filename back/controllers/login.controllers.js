import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { USERS } from '../services/users.js';

export const login = (req, resp, next) => {
    const user = req.body;

    if (!user.name || !user.passwd) {
        next(new Error('Missing data, try again'));
    } else {
        // TODO comprobar usuario

        if (
            !USERS.some(
                (item) =>
                    item.name === user.name &&
                    bcrypt.compareSync(user.passwd, item.passwd)
            )
        ) {
            next(new Error('user or password invalid'));
        } else {
            const id = parseInt(Math.random() * 10000);
            const token = createToken({
                name: user.name,
                id,
            });
            resp.json({ token, userName: user.name, id });
        }
    }
};
