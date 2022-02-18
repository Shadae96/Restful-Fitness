const express = require ('express');
const router = require('express').Router();
<<<<<<< HEAD:controllers/newWorkoutRoutes.js
const {Workouts} = require('../models');

const withAuth = require('../utils/auth');

//getting the workouts
router.get('/workout', async (req, res) => {
=======
const { Workouts, User } = require('../models');
const path = require('path');
const withAuth = require('../utils/auth');
const fs = require ("fs");
const http= require ("http");
const util = require("util");

//Will display the new workout page
router.get('/', (req, res,) => {
    res.render('workouts');
});


//getting the workouts
router.get('/', withAuth, async (req, res) => {
>>>>>>> main:controllers/workouts.js
    // res.json({test: 'test' });
    try {
        const workoutData = await Workouts.findAll()

        // Workouts was changed to excercises!
        const exercises = workoutData.map((workout) => workout.get ({plain: true}));
  
<<<<<<< HEAD:controllers/newWorkoutRoutes.js

        res.render('workoutHistory', {
            exercises,
          logged_in :req.session.logged_in,
        });
=======
        res.render("workoutHistory",
        { Workouts,
          logged_in:req.session.logged_in
        })
>>>>>>> main:controllers/workouts.js
  
  } catch (err) {
        res.status(500).json(err);
      }
    });


    
// Creating a new workout
<<<<<<< HEAD:controllers/newWorkoutRoutes.js
router.post('/workout', async (req, res) => {
=======
router.post('/', withAuth, async (req, res) => {
>>>>>>> main:controllers/workouts.js
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