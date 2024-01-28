const mongoose = require('mongoose');
require('dotenv').config();
const connectDB= async () => {
    try {
        const url= process.env.MONGO_URI;
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {connectDB}