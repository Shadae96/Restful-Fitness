const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('../blogRoutes');
const workoutsFormRoutes = require('../workouts');
const workoutHistoryRoutes = require('../workoutHistory');
const addWorkoutsRoutes = require('../addworkouts');




router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/workouts', workoutsFormRoutes);
router.use('/workoutHistory', workoutHistoryRoutes);
router.use('/addworkouts', addWorkoutsRoutes);



module.exports = router;