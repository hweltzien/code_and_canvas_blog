const router = require("express").Router();

const withAuth = require("../utils/auth");
const { Posts, User, Comment } = require("../models/index");


router.get("/", async (req, res) => {
  console.log("homepage route");
  try {
console.log(req.session.isLoggedIn)
    res.render("homepage", {isLoggedIn: req.session.isLoggedIn});

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
  
  router.get("/posts", async (req, res) => {
    try {
      const postData = await Posts.findAll({include: User});
      const formattedPosts = postData.map((post) => post.get({ plain: true }));
      console.log(formattedPosts);
      res.render("posts", {isLoggedIn: req.session.isLoggedIn, posts: formattedPosts});
  
    } catch (err) {
      res.json(err);
    }
  });
  router.get("/post/:id", async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id, {include: [User, {model: Comment, include: User}]});
  
      if (postData) {
        const post = postData.get({ plain: true });
  console.log(post.comments);
        res.render("individual", {
          post,
          isLoggedIn: req.session.isLoggedIn,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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



