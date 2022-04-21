const express = require('express');
const connectDB = require('./config/db');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

const app = express();
connectDB();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send({ page: 'Home' }));

app.use('/auth', require('./routes/api/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
