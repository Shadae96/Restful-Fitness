const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');


router.get('/', async (req, res) => {
    res.render('register');
});

module.exports = router;