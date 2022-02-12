const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const newRegistration = require('./newRegRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/register', newRegistration);

module.exports = router;