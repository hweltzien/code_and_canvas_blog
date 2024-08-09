const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // await seedPlatforms();
  await seedTitles();
  console.log("Seeding complete!");
};

seedDatabase().catch((err) => {
  console.error("Seeding failed:", err);
});
