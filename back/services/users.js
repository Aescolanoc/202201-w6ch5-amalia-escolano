import bcrypt from 'bcryptjs';

export const USERS = [
    { name: 'Pepe', passwd: bcrypt.hashSync('1234') },
    { name: 'Paco', passwd: bcrypt.hashSync('4321') },
];
