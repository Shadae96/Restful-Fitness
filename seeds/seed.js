const seedUserData = require('./userData');
const seedBlog = require('./blogData');
const seedWorkouts = require('./workoutData')

const sequelize = require ('../config/connection');

const seedAll = async () => {
  await sequelize.sync({force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUserData();
  console.log('\n----- USER SEEDED -----\n');

  await seedBlog();
  console.log('\n---- Blog SEEDED -----\n');

  await seedWorkouts();
  console.log('\n----- Workouts SEEDED -----\n');


  process.exit(0);
};

seedAll();


