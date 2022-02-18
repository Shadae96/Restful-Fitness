const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { Workouts } = require('../models')

// deleted the end of the require chain for User
//Route to the Register Form from the Login Page

router.get('/', async (req, res) => {
    res.render('workouts');
});


module.exports = router