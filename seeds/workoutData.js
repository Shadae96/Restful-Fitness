const { Workouts } = require('../models');

const workoutData = [
    {
      "title": "Monday",
      "duration": "thirty minutes",
      "intensity": "high",
      "outcome": "energized",
      "user_id":"1"
    },
    {
      "title": "Tuesday",
      "duration": "thirty minutes",
      "intensity": "low",
      "outcome": "tired",
      "user_id":"1"
    },
    {
      "title": "Wednesday",
      "duration": "thirty minutes",
      "intensity": "high",
      "outcome": "good",
      "user_id":"1"
    },
    {
      "title": "Thursday",
      "duration": "thirty minutes",
      "intensity": "medium",
      "outcome": "so-so",
      "user_id":"1"
    },
    {
      "title": "Friday",
      "duration": "thirty minutes",
      "intensity": "low",
      "outcome": "good",
      "user_id":"1"
    }
];

const seedWorkouts = () => Workouts.bulkCreate(workoutData);
module.exports = seedWorkouts