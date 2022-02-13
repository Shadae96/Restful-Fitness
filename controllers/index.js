const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const newRegForm = require('./regForm');
const newUserReg = require('./newUser');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/register', newRegForm);
router.use('/login', newUserReg);

module.exports = router;

// changed the file name from newUserRegistration to regForm because it takes me to the registration form
// however, I need to build a newUserRegistration route