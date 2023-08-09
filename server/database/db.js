import mongoose from 'mongoose';

const DBconnection = async () => {
    
    const MONGO_URL = 'mongodb+srv://user:file24sharing@file-sharing-app.uykj3bb.mongodb.net/?retryWrites=true&w=majority';
    
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser : true});
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBconnection;