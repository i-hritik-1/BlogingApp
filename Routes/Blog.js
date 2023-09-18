const express = require("express");
const router = express.Router();

// Import Controller
const {createPost,getAllPosts} = require("../Controllers/PostController");
const {createComments} = require("../Controllers/CommentController");
const {likePost} = require("../Controllers/LikeController");
const {unlikePost} = require("../Controllers/UnLikeController");



// Mapping
// Hritik raushan kya haal hai doston meri typing kamjor hain yar to mughe kya krna chahiye

router.post("/posts/create",createPost);
router.post("/comment/create",createComments);
router.get("/posts/getPost",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
// router.post("likes/unlike",unLikePost);

module.exports = router;