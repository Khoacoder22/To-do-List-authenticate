import mongoose from 'mongoose';

export const connectDb = async () => {
    try{
        const dbUrl = process.env.DB;

        if(!dbUrl) {
            throw new Error("Database URL is not defined in environment variables");
        }

        await mongoose.connect(dbUrl);
        console.log("Database connected successfully");

    } catch(error){

        console.log('Connection fall', error);
        process.exit(1);
        
    }
}