const mongoose = require('mongoose');
const { mongoURI } = require('./keys');

module.exports = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Logged in to MongoDB...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
