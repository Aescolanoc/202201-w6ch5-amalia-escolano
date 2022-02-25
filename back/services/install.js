import { mongoConnect } from './db.js';
import dataJSON from './robots.js';
import * as dotenv from 'dotenv';
dotenv.config();

async function install() {
    const collection = 'robots';
    const { mongoClient, isdiCoders } = await mongoConnect();

    const robotsCollection = isdiCoders.collection(collection);
    const result = await robotsCollection.insertMany(dataJSON.robots);
    mongoClient.close();
    return result;
}

console.log(await install());
