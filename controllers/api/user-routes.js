const router = require("express").Router();
const { User } = require("../../models");
//localhost:3001/api/user
// CREATE new user
router.post("/getStarted", async (req, res) => {
  console.log(req.body);
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Test user creation

// const testUser = async () => {
//   try {
//     // Create a new user
//     const newUser = await User.create({
//       username: 'testuser',
//       email: 'testuser@example.com',
//       password: 'password123',
//     });

//     // Verify that the user was created
//     console.log('New User:', newUser);

//     // Check password
//     const isPasswordValid = newUser.checkPassword('password123');
//     console.log('Password Valid:', isPasswordValid);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// testUser();


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
console.log("valid password", validPassword);
    if (!validPassword) {
      
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.user_id = dbUserData.id;
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
  if (req.session.isLoggedIn) {
    req.session.isLoggedIn = false;
    req.session.destroy(err => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to log out' });
      }
      res.clearCookie("connect.sid", { path: '/' });
      res.json({ isLoggedIn: false });

    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
