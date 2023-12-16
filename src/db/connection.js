import { connect } from 'mongoose';

export const myConnection = async _ => {

    try {
        const response = await connect('mongodb://127.0.0.1:27017/apidbmaps');
        console.log(`DB Connected: ${response.connection.name}`);
    } catch (error) {
        console.log(error);
    }

}


