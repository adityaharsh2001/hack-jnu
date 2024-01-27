const mongoose = require('mongoose');

const connectDB= async () => {
    try {
        const url='mongodb+srv://adityaharsh:xzCRjqUNzwEarb3B@serverlessinstance0.2szbnts.mongodb.net/'
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