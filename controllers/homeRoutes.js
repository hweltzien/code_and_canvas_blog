const router = require("express").Router();
const { Title, User } = require("../models/user");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  console.log("homepage route");
  try {

    res.render("homepage", {isLoggedIn: res.session.isLoggedIn});

  } catch (err) {
    res.json(err);
  }
});

router.get("/user", (req, res) => {
  try {

    res.render("user");

  } catch (err) {
    res.json(err);
  }
});


router.get("/posts", (req, res) => {
  try {

    res.render("posts");

  } catch (err) {
    res.json(err);
  }
});

router.get("/getStarted", (req, res) => {
  try {

    res.render("getStarted");

  } catch (err) {
    res.json(err);
  }
});
router.get("/login", (req, res) => {
  try {

    res.render("login");

  } catch (err) {
    res.json(err);
  }
});

router.get("/logout", async (req, res) => {
  console.log("logout route");
  try {
    res.render("logout");
  } catch (err) {
    res.json(err);
  }
  res.render("logout");
});

module.exports = router;



