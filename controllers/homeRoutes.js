const router = require("express").Router();
const { Title, User } = require("../models");
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
  if (req.session.logged_in) {
    res.redirect("/user", {isLoggedIn: res.locals.isLoggedIn});
    return;
  }

  res.render("login");
});



router.get("/signout", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/signout");
    return;
  }

  res.render("signout");
});



router.get("/signout", async (req, res) => {
  console.log("signout route");
  try {
    res.render("signout");
  } catch (err) {
    res.json(err);
  }
  res.render("signout");
});

module.exports = router;



