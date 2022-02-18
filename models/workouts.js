const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workouts extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Workouts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
       references: {
           model:'user',
           key:'id',
       }
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    duration: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    intensity: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    outcome: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },

      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Workouts',
      }
    );

module.exports = Workouts;