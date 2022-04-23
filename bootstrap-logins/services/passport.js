const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  console.log('searialize', user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

//Twitter passport
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterAPIKey,
      consumerSecret: keys.twitterAPIKeySecret,
      callbackURL: '/auth/twitter/callback',
      proxy: true
    },
    async (token, tokenSecret, profile, done) => {
      console.log(`Logging in with Twitter...`);
      const existingUser = await User.findOne({
        twitterID: profile._json.id
      });
      console.log(`twitter existing user: ${existingUser}`);
      if (existingUser) {
        const updatedUser = await User.findOneAndUpdate(
          { id: existingUser.id },
          { $inc: { count: 1 } }
        );
        done(null, updatedUser);
      } else {
        const user = await new User({
          twitterID: profile._json.id,
          name: {
            firstName: profile._json.name,
            lastName: profile._json.screen_name
          },
          location: profile._json.location,
          description: profile._json.description,
          pfp: profile._json.profile_image_url
        }).save();
        done(null, user);
      }
    }
  )
);

// Google passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(`Logging in with Google...`);
      const existingUser = await User.findOne({
        googleID: profile.id
      });
      console.log(`google existing user: ${existingUser}`);
      if (existingUser) {
        const updatedUser = await User.findOneAndUpdate(
          { id: existingUser.id },
          { $inc: { count: 1 } }
        );
        done(null, updatedUser);
      } else {
        const user = await new User({
          googleID: profile.id,
          name: {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          },
          email: profile.emails[0].value,
          pfp: profile.photos[0].value
        }).save();
        done(null, user);
      }
    }
  )
);
