const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.send("Wrong route!");
});

module.exports = router;
