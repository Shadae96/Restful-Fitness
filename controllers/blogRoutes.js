const express = require ('express');
// moved the express package up
const router = require('express').Router();
const { Blog } = require('../models/');


// Show Blog page
router.get('/blog', async (req, res) => {
      res.render('blog');
});


    // GET ALL CURRENT BLOG POSTS
router.get('/blog', async (req, res) => {
    try {
      const blogData = await Blog.findAll();
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });  


//CREATE A NEW BLOG
router.post('/blog', async (req, res) => {
    try {
      const blogData = await Blog.create(req.body);
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  // DELETE A BLOG POST
router.delete('/blog/:id', async (req, res) => {
    try {
      const blogData = await blogData.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'cannot delete note' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;