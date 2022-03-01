import mongoose from 'mongoose';

export function userCreator(modelName = 'User') {
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        passwd: { type: String, required: true },
        robots: {
            type: mongoose.Types.ObjectId, //de esta forma se relaccionan las tablas
            ref: 'robots', // Aqui indicamos que collecion queremos relacionar
        },
    });
    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
            delete returnedObject.passwd;
        },
    });

    let User;
    if (mongoose.default.models[modelName]) {
        User = mongoose.model(modelName);
    } else {
        User = mongoose.model(modelName, userSchema);
    }

    return User;
}
