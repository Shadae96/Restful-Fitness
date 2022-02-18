const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");
const newRegForm = require('./regForm');
const newUserReg = require('./newUser');
const newWorkout = require('./newWorkoutRoutes')
const newWorkoutForm = require('./addWorkoutForm')


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/api/blog", blogRoutes);
router.use('/register', newRegForm);
router.use('/register/login', newUserReg);
router.use('/api/newWorkoutForm', newWorkoutForm)
router.use("/api/newWorkout", newWorkout)

module.exports = router;

// changed the file name from newUserRegistration to regForm because it takes me to the registration form
// however, I need to build a newUserRegistration route-