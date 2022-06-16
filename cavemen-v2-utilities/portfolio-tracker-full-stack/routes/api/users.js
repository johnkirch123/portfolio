const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Get User
// @access  Public
router.get('/', (req, res) => res.send('User Test Route'));

module.exports = router;
