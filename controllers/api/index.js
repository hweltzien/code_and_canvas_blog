const express = require("express");
const router = express.Router(); // Create an express Router instance

// Require other route modules
const userRoute = require("./user-routes");
const postRoute = require("./post-routes");


// Mount routes using the correct paths
router.use("/user", userRoute);
router.use("/post", postRoute);

module.exports = router;