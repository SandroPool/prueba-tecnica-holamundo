import { Schema, model } from 'mongoose';


const MyMaps = new Schema({
    lat: { type: String, required: true },
    long: { type: String, required: true },
    tiempo: { type: Date, required: true, default: new Date() }
});


export default model('Map', MyMaps);
