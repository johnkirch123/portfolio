const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', function (req, res) {
  res.send('Home API running');
});

require('./routes/assetRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`listening on PORT ${PORT}`));
