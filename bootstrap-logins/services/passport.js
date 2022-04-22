const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Google passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleID: profile.id
      });
      if (existingUser) {
        console.log('before: ', existingUser);
        const updatedUser = await User.findOneAndUpdate(
          { id: existingUser.id },
          { $inc: { count: 1 } }
        );
        console.log('after: ', updatedUser);
        done(null, updatedUser);
      } else {
        const user = await new User({
          googleID: profile.id,
          name: {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          },
          email: profile.emails,
          pfp: profile.photos[0].value
        }).save();
        done(null, user);
      }
    }
  )
);

//Twitter passport
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterAPIKey,
      consumerSecret: keys.twitterAPIKeySecret,
      callbackURL: '/auth/twitter/callback'
    },
    function (token, tokenSecret, profile, cb) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        console.log('twitter profile: ', profile);
        return cb(err, user);
      });
    }
  )
);
