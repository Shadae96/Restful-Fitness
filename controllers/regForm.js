const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
<<<<<<< HEAD
const { User } = require('../models');
=======
const { User } = require('../models/');
>>>>>>> ddbb15efdb21372dfeff0ce1f7cfe9132efa183d


//Route to the Register Form from the Login Page

router.get('/', async (req, res) => {
    res.render('register');
});


module.exports = router;