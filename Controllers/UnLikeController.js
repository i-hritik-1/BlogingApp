const Like = require("../Models/Like");
const Post = require("../Models/Post");


exports.unlikePost = async (req,res) => {
    try{
        const {post,like} = req.body;
        const unliked = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:unliked._id}},{new:true});

        res.json({
            post:updatedPost,
        });



    }
    catch(err)
    {
        return res.status(500).json({
            error:"Error while unliking."
        })

    }
}





