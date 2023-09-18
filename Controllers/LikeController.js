const Like = require("../Models/Like");
const Post = require("../Models/Post");

exports.likePost = async (req,res) =>{
    try{
        const{post,user} = req.body;

        const like = new Like({
            post,user,
        });

        const saveLike = await like.save();

        // Update the post collection

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:updatePost,
        })
    }
    catch(err)
    {
        return res.status(500).json({
            error:"Error while liking.",
        })
    }
}