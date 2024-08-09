const router = require("express").Router();
const { User } = require("../../models/user");

// CREATE new user
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.isLoggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      console.log(
        "File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie
      );
      
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to log out' });
      }
      res.clearCookie("connect.sid", { path: '/' });
      return res.status(200).json({ message: 'Logged out successfully' });
    });
});

module.exports = router;
