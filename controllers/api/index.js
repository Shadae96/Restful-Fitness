const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('../blogRoutes');
const workoutsFormRoutes = require('../workouts');




router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/workouts', workoutsFormRoutes);



module.exports = router;