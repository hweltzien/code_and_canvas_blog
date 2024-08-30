const router = require('express').Router();
const { Posts } = require('../../models');
const cloudinary = require('cloudinary');
require("dotenv").config();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

cloudinary.config({
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
    const result = await new Promise( (resolve, reject) => {
      cloudinary.v2.uploader.upload_stream({  
        resource_type: "image",
        folder: "blog",
      }, (error, result) => {
        if (error) {
          console.error("Upload Error:", error);
          reject(error);
        } else {
          console.log("Upload Success:", result);  // Directly log the result object
          resolve(result);
        

        }
      }).end(req.file.buffer);
    });
    console.log("Result:", result);
    // Create new post in the database
  const dbPostData = await Posts.create({
            title: req.body.title[0],
            content: req.body.content[0],
            user_id: req.session.user_id,
            url: result.secure_url,
          })

          res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;