const seedPosts = require('./posts-seeds');
const seedUsers = require('./user-seeds');

const seedDatabase = async () => {
  try {
    await seedUsers();
    console.log('Users seeded successfully');
    await seedPosts();
    console.log('Posts seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
  }
};

seedDatabase();