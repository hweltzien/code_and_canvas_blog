const { Posts } = require('../models');

const postsData = [
  {
    title: 'Getting Started with React',
    content: 'As a junior developer with entry-level experience in various languages and frameworks, diving into React for the first time was a little daunting. At this point, I’ve only scratched the surface of what React can do. I’d like to continue learning and exploring its vast ecosystem. If you’re considering diving into React for the first time, don’t be intimidated. The community is huge and the framework itself is designed to help you get productive quickly.',
    user_id: 1,
    url: '/images/react.png',
    
  },
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;