const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const DatabaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log('Mongoose connection is successful');
    });

    // Event for connection error
    db.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    // Event for disconnected
    db.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
}

module.exports={DatabaseConnection}

