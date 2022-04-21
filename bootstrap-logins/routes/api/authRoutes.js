const express = require('express');
const router = express.Router();

router.get('/google', (req, res) => {
  res.send({ page: 'Google Auth Page' });
});

module.exports = router;
