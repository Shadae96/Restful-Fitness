const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models/User');


//Register Form

router.get('/', async (req, res) => {
    // handle creating new user
    res.render('register');
});


module.exports = router