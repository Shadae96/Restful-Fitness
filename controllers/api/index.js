const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('../blogRoutes');
const newWorkoutRoutes = require('../newWorkoutRoutes');



router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/newWorkout', newWorkoutRoutes);


module.exports = router;