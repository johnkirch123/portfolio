const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleID: String,
  facebookID: String,
  twitterID: String,
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
  email: {
    type: String,
    default: 'no-email@email.com'
  },
  pfp: {
    type: String,
    default: 'none'
  },
  gender: {
    type: String,
    default: 'No Gender Given'
  },
  description: {
    type: String,
    defualt: 'No description given'
  },
  location: {
    type: String,
    default: 'Not Given'
  },
  count: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model('user', UserSchema);
