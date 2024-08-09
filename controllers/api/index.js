const express = require("express");
const router = express.Router(); // Create an express Router instance

// Require other route modules
const userRoute = require("./user-routes");



// Mount routes using the correct paths
router.use("/user", userRoute);


module.exports = router;