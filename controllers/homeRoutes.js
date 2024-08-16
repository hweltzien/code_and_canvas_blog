const router = require("express").Router();
const { Title, User } = require("../models/user");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  console.log("homepage route");
  try {
console.log(req.session.isLoggedIn)
    res.render("homepage", {isLoggedIn: req.session.isLoggedIn});

  } catch (err) {
    res.json(err);
  }
});

router.get("/about", (req, res) => {
  try {

    res.render("about", {isLoggedIn: req.session.isLoggedIn});

  } catch (err) {
    res.json(err);
  }
});
router.get("/contact", (req, res) => {
  try {

    res.render("contact", {isLoggedIn: req.session.isLoggedIn});

  } catch (err) {
    res.json(err);
  }
});
router.get("/getStarted", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }

    res.render("getStarted");
    
    
    
    
    
  });
  router.get("/login", (req, res) => {
    try {
      
      res.render("login");
      
    } catch (err) {
      res.json(err);
    }
  });
  
  router.get("/logout", (req, res) => {
    try {
      res.render("logout", {isLoggedIn: false});
    } catch (err) {
      res.json(err);
    }
  });
  
  router.get("/posts", (req, res) => {
    try {
  
      res.render("posts", {isLoggedIn: req.session.isLoggedIn});
  
    } catch (err) {
      res.json(err);
    }
  });
  router.get("/services", (req, res) => {
    try {
  
      res.render("services", {isLoggedIn: req.session.isLoggedIn});
  
    } catch (err) {
      res.json(err);
    }
  });
  router.get("/user", (req, res) => {
    try {
      
      res.render("user", {isLoggedIn: req.session.isLoggedIn});
      
    } catch (err) {
      res.json(err);
    }
  });


module.exports = router;



