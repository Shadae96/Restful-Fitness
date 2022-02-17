const sequelize = require("../config/connection");
const { User } = require("../models");
const { Blog } = require("../models");
const { Workouts } = require("../models")

const userData = require("./userData.json");
const blogData = require("./blogData.json");
const workoutData = require("./workoutData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedBlogDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedWorkoutDatabase = async () => {
  await sequelize.sync({force: true });

  await Workouts.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};

seedWorkoutDatabase();
seedBlogDatabase();
seedDatabase();
