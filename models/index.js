const User = require('./User');
const Blog = require('./blog');


// Remember to re-add Blog to exports
User.hasMany(Blog,{
    foreignKey: 'user_id',
    onDelete:'CASCADE'

});

Blog.belongsTo(User,{
    foreignKey: 'user_id'
});


module.exports = { User, Blog};