import mongoose from 'mongoose';

export function robotsCreator(collection = 'robots') {
    const robotSchema = new mongoose.Schema({
        name: String,
        image: String,
        speed: Number,
        strength: Number,
        creationdate: Number,
    });

    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
}
