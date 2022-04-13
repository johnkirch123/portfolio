const express = require("express");
const router = express.Router();

// 2. Don't need api/users because it is 'used' by app.use() and prefixed
// @route     GET api/blogs/test
// @desc      Tests blogs route
// @access    Public
router.get("/test", (req, res) => {
  res.json({ msg: "Blogs Works" });
});

// *** 2. Always export routes ***
module.exports = router;
