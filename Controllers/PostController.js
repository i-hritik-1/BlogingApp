const Post = require("../Models/Post");

exports.createPost = async (req,res) =>{
    try{
        const {title,body} = req.body;
        const post = new Post({
            title,body,
        });

        const savePost = await post.save();

        res.json({
            post:savePost,
        });




    }
    catch(err)
    {
        return res.status(500).json({
            error:err.message,
            message:"Error while creating a post."
        });
    }
}


exports.getAllPosts = async (req,res) =>{
    try{
        const posts = await Post.find()
        .populate("comments");

        res.json({
            posts,
        })

    }
    catch(err)
    {
        return res.status(500).json({
            error:"Error while geting the data",
        });
    }
}




