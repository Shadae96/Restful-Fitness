const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");
const newRegForm = require('./regForm');
const newUserReg = require('./newUser');


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/api/blog", blogRoutes);
router.use('/register', newRegForm);
router.use('/register/login', newUserReg);
router.use('/api/workouts', workouts)

module.exports = router;

