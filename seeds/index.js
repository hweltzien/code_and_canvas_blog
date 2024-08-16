const sequelize = require('../config/connection');
const seedPosts = require('./posts-seeds');
const seedUsers = require('./user-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  console.log("Seeding complete!");
};

seedDatabase().catch((err) => {
  console.error("Seeding failed:", err);
});
