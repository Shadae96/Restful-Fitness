const express = require ('express');
const router = require('express').Router();
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
    // res.json({test: 'test' });
    try {
        const workoutData = await Workouts.findAll()

        // Workouts was changed to excercises!
    const exercises = workoutData.map((workout) => workout.get ({plain: true}));

        res.render("workoutHistory",
        { Workouts,
          logged_in:req.session.logged_in
        })
  
  } catch (err) {
        res.status(500).json(err);
      }
    });


    
// Creating a new workout

router.post('/addWorkout', withAuth, async (req, res) => {
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