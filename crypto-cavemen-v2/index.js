const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`listening on PORT ${PORT}`));
