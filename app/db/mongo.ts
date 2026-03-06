import mongoose from 'mongoose';
export const connectToDatabase = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}?${process.env.MONGO_CONFIG}`);
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to database');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error:', err);
        disconnectFromDatabase();
    });
}

const disconnectFromDatabase = async () => {
    await mongoose.disconnect();
}