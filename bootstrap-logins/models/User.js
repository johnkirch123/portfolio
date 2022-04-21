const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleID: String,
  facebookID: String,
  githubID: String,
  linkedinID: String,
  name: {
    firstName: {
      type: String,
      default: 'None Given'
    },
    lastName: {
      type: String,
      default: 'None Given'
    }
  },
  email: [],
  pfp: {
    type: String,
    default: 'none'
  },
  gender: {
    type: String,
    default: 'none'
  }
});

module.exports = User = mongoose.model('user', UserSchema);
