const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");
const newRegForm = require('./regForm');
const newUserReg = require('./newUser');
const newWorkoutForm = require('./addworkouts')


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/api/blog", blogRoutes);
router.use('/register', newRegForm);
router.use('/register/login', newUserReg);
router.use('/api/addworkouts', newWorkoutForm)

module.exports = router;

