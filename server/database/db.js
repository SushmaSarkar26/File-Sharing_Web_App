import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const URL = process.env.DB_URL;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        // console.log('Database connected successfully');
    } catch (error) {
        return error;
    }
}

export default DBConnection;