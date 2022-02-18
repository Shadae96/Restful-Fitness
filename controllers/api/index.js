const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('../blogRoutes');
const newWorkoutRoutes = require('../newWorkoutRoutes');
const newWorkoutForm = require('../addWorkoutForm')



router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/newWorkout', newWorkoutRoutes);
router.use('/newWorkoutForm',newWorkoutRoutes)


module.exports = router;