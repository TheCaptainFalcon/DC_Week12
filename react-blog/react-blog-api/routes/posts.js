const express = require("express"),
router = express.Router();

const PostModel = require("../models/posts");

router.get("/", (req, res) => {
  res.send("posts route")
});

// Get all posts
router.get("/post", async (req, res) => {
  const allPosts = await PostModel.getAll();
  res.json(allPosts)
});

// Get one post
router.get("/post/:post_id?", async (req, res) => {
  const postId = req.params.post_id;
  const thePost = await PostModel.getById(postId);
  res.json(thePost)
});

// Get comments linked to the one post
router.get("/post/comment/:post_id?", async (req, res) => {
  const postId = req.params.post_id;
  const thePost = await PostModel.getCommentByPost(postId) ;
  res.json(thePost)
});

module.exports = router;
