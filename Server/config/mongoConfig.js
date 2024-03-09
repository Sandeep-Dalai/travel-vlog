//config/mongoConfig
const mongoose  = require('mongoose');

// Check connection status
const connectToMongoDB = async () => {
    try {
      //console.log('mongoURI:', config.mongoURI);
      await mongoose.connect('mongodb://127.0.0.1:27017/roamrave');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      // Handle the error as needed (throw it, log it, etc.)
    }
  };

  module.exports = {
    connectToMongoDB
};