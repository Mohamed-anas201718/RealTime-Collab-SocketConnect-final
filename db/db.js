const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Internship', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Mongoose connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectdb; // Make sure you are exporting connectdb as the default export










/*
const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
*/

















/*
const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Mongoose connection error:', error.message);
        process.exit(1); // Exit the application with an error code
    }
};

module.exports = connectdb;
*/




/*
const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error('Mongoose connection error:', error.message);
        process.exit(1); // Exit with error code
    }
};

module.exports = connectdb;
*/