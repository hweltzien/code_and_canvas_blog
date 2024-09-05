const User = require('./user');
const Posts = require('./posts');
const Comment = require('./comment');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

});
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

Posts.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Posts, Comment };