import mongoose from 'mongoose';
const runtimeConfig = useRuntimeConfig();
import {Nitro} from 'nitropack';

export default async (_nitroApp: Nitro) => {
    mongoose.connect(runtimeConfig.mongoUri)
        .then(() => console.log('connected to db'))
        .catch(err => console.log('error connecting to db', err));
};