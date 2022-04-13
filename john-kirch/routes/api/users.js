const express = require("express");
const router = express.Router();

// 2. Don't need api/users in GET route because it is 'used' by app.use       () and prefixed
// @route     GET api/users/test
// @desc      Tests users route
// @access    Public
router.get("/test", (req, res) => {
  res.json({ msg: "Users Works" });
});

module.exports = router;
