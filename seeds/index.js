const seedPosts = require('./posts-seeds');

const seedDatabase = async () => {
  try {
    await seedPosts();
    console.log('Posts seeded successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
};

seedDatabase();