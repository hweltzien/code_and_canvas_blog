const router = require('express').Router();
const { Posts } = require('../../models');
const cloudinary = require('cloudinary');
require("dotenv").config();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

cloudinary.v2.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
  secure: true,
});

// CREATE new post
router.post("/", upload.single('image'), async (req, res) => {
    console.log(req.body);
    try {
      // Upload image to Cloudinary
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      console.log(result);
      const dbPostData = await Posts.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        url: result.secure_url,
      });
  
        res.status(200).json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

 

  module.exports = router;