const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

//blog post belongs to a user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreignKey: 'user_id'
})

//user can have many comments 
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

//comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment }