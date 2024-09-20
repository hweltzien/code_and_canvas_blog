const router = require("express").Router();

const withAuth = require("../utils/auth");
const { Posts, User, Comment } = require("../models/index");


router.get("/", async (req, res) => {
  console.log("homepage route");
  try {
    const postData = await Posts.findAll({ include: User });
    const formattedPosts = postData.map((post) => post.get({ plain: true }));
    console.log("formattedPosts", postData);
    // res.render("posts", {isLoggedIn: req.session.isLoggedIn, posts: formattedPosts});
    console.log(req.session.isLoggedIn)
    res.render("homepage", { isLoggedIn: req.session.isLoggedIn, posts: formattedPosts });



  } catch (err) {
    console.log(err);
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

router.get("/logout", (req, res) => {
  try {
    res.render("logout", { isLoggedIn: false });
  } catch (err) {
    res.json(err);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const postData = await Posts.findAll({ include: User });
    const formattedPosts = postData.map((post) => post.get({ plain: true }));
    console.log(formattedPosts);
    res.render("posts", { isLoggedIn: req.session.isLoggedIn, posts: formattedPosts, isLoggedOut: !req.session.isLoggedIn });



  } catch (err) {
    res.json(err);
  }
});
router.get("/post/:id", async (req, res) => {
  console.log("GET POST ROUTE")
  console.log(req.session);
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [User, {
        model: Comment,
        include: User
      }]
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log("POST AND COMMENT", post, post.comments);
      res.render("individual", {
        post,
        isLoggedIn: req.session.isLoggedIn,
        isAuthor: req.session.user_id === post.user_id,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/user", (req, res) => {
  try {

    res.render("user", { isLoggedIn: req.session.isLoggedIn });

  } catch (err) {
    res.json(err);
  }
});
router.get("/dashboard", async (req, res) => {
  if (!req.session.isLoggedIn) {
    res.redirect("/login");
    return;
  }
  try {
    const postData = await Posts.findAll({
      where:
        { user_id: req.session.user_id }
    });
    const formattedPosts = postData.map((post) => post.get({ plain: true }));
    console.log(formattedPosts);
    res.render("dashboard", { isLoggedIn: req.session.isLoggedIn, posts: formattedPosts });

  } catch (err) {
    res.json(err);
  }
});

module.exports = router;



