const router = require('express').Router();
const { Posts } = require('../../models');

// CREATE new post
router.post("/", async (req, res) => {
    console.log(req.body);
    try {
      const dbPostData = await Posts.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
  
        res.status(200).json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;