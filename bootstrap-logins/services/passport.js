const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

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
        await User.findOneAndUpdate(
          { id: existingUser.id },
          { $inc: { count: 1 } }
        );
        console.log(existingUser);
        done(null, existingUser);
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
