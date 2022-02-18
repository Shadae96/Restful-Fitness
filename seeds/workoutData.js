const { Workouts } = require('../models');

const workoutData = [
    {
      "title": "Monday",
      "duration": "thirty minutes",
      "intensity": "high",
      "outcome": "energized"
    },
    {
      "title": "Tuesday",
      "duration": "thirty minutes",
      "intensity": "low",
      "outcome": "tired"
    },
    {
      "title": "Wednesday",
      "duration": "thirty minutes",
      "intensity": "high",
      "outcome": "good"
    },
    {
      "title": "Thursday",
      "duration": "thirty minutes",
      "intensity": "medium",
      "outcome": "so-so"
    },
    {
      "title": "Friday",
      "duration": "thirty minutes",
      "intensity": "low",
      "outcome": "good"
    }
];

const seedWorkouts = () => Workouts.bulkCreate(workoutData);
module.exports = seedWorkouts