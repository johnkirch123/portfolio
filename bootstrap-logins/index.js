const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ page: 'Home' }));

app.use('/api/auth', require('./routes/api/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
