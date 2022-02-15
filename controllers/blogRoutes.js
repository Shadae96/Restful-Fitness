const router = require('express').Router();
const { Blog } = require('../models/');
const path = require('path');
const withAuth = require('../utils/auth');

// Show Blog page

router.get('/blog', withAuth, async (request,response)=> {
  try{
    response.sendFile(path.join(__dirname, "views", "blog.handlebars"));
    console.log("retrieving notes file");
  } catch (err) {
    res.status(500).json(err);
  }
});  


// router.get('/blog', async (req, res) => {
//       res.render('blog');
// });

    // GET ALL CURRENT BLOG POSTS
router.get('/blog', withAuth, async(req, res) => {
    try {
      const blogData = await Blog.findAll();
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });  


//CREATE A NEW BLOG

router.post('/blog',withAuth, async (req, res) => {
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