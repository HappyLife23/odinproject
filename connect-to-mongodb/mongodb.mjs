import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGODB_URL;

 const connectToMongodb = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Database: mongodb is connecte.')
    } catch (error) {
        console.error(error);
    }
 }

 export{ connectToMongodb }

