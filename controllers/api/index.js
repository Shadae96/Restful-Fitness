const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('../blogRoutes');
const workoutsRoutes = require('../workouts');




router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/workouts', workoutsRoutes);



module.exports = router;