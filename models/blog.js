const { Model, DataTypes } = require('sequelize');
//I am not sure we need bcrypt here this is for incryption of the password will we be incrypting the notes in the app?
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blog extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Title',
      },

      textarea: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'text',
      },
      
      },
      {
        // hooks: {
        //   beforeCreate: async (newUserData) => {
        //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //     return newUserData;
        //   },
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
      }
    );

module.exports = Blog;