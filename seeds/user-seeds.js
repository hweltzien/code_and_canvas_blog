const { User } = require("../models"); // Adjust the path to your models
const bcrypt = require("bcrypt");

const userData = [
  {
    username: "exampleUser1",
    email: "user1@example.com",
    password: "password123",
  },
  {
    username: "exampleUser2",
    email: "user2@example.com",
    password: "password456",
  },
  {
    username: "exampleUser3",
    email: "user3@example.com",
    password: "password789",
  },
];

const seedUsers = async () => {
  try {
    // Clear existing users
    await User.destroy({ where: {} });

    // Create users
    for (const user of userData) {
      await User.create({
        username: user.username,
        email: user.email,
        password: await bcrypt.hash(user.password, 10), // Hash the password
      });
    }

    console.log("Users seeded successfully");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
};

seedUsers();
