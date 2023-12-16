import MyMaps from '../models/maps.model.js';

export const saveAddress = async (req, res) => {
    try {
        const { lat, long, tiempo } = req.body;
        const address = new MyMaps({ lat, long, tiempo });
        const response = await address.save();
        return res.status(200).json({ message: 'Hola Mundo, Saved', lat: response.lat });
    } catch (error) {
        return res.status(400).json({ message: 'error check your code' });
    }
}

export const getAllAddress = async (req, res) => {
    try {
        const allAddress = await MyMaps.find();
        return res.status(200).json(allAddress);
    } catch (error) {
        return res.status(400).json({ message: 'error check your code' });
    }
}
