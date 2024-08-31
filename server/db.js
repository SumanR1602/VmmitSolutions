const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.mongo_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
    }
};

module.exports = connectToMongo;
