const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');


//Route to the Register Form from the Login Page

router.get('/', async (req, res) => {
    res.render('register');
});


module.exports = router;