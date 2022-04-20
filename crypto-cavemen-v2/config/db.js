const mongoose = require('mongoose');
const { mongoURI } = require('./keys');

module.exports = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
