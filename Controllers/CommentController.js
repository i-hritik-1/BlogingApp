const Post = require("../Models/Post");
const Comment = require("../Models/Comment");


// Business Logic

exports.createComments = async (req,res) => {
    try{

        //Fetch data from request
        const {post,user,body} = req.body;

        //Create a comment object
        const comment = new Comment({
            post,user,body
        });

        //Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post using id and add it to the comment array.
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new : true})
                            .populate("comments").populate("likes") // Populate the comments array with comment documents
                            .exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(err)
    {
        return re.status(500).json({
            error:"Error While creating object.",
        })

    }
}


// Save function -> Object is firstly defined before using it