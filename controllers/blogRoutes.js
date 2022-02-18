const express = require ('express');
const router = require('express').Router();
const { Blog, User } = require('../models/');
const path = require('path');
const withAuth = require('../utils/auth');
const fs = require ("fs");
const http= require ("http");
const util = require("util");


// get all blog posts --- works!
router.get('/', async (req,res)=> {
  try { 
      const blogData = await Blog.findAll()
      const blogs = blogData.map((blog) => blog.get ({plain:true}));

      res.render("blog",
      { blogs,
        logged_in:req.session.logged_in

      })

} catch (err) {
      res.status(500).json(err);
    }
  });  


// Create new blog post

  router.post('/', async (req, res) => {
    try {
      const blogData = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



// Delete one Blog post






module.exports = router;