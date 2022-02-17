const express = require ('express');
const router = require('express').Router();
const { Workouts, User } = require('../models/');

const path = require('path');
const withAuth = require('../utils/auth');
const {v4 : uuidv4} = require('uuid');

const fs = require ("fs");
const http= require ("http");
const util = require("util");

router.get('/', (req, res, next) => {
    res.json({test: 'test' });
});

// Creating a new workout
router.post('/', async (req, res) => {
    try{
        const dbUserData = await Workouts.create({
            user_name: req.body.user_name,
            title: req.body.title,
            duration: req.body.duration,
            intensity: req.body.intensity,
            outcome: req.body.outcome,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});




module.exports = router;