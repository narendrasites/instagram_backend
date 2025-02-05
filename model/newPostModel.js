const mongoose =require('mongoose');
const newPostSchema=mongoose.Schema({
    "caption":String,
    "description":String,
    "image":String,
    "userid":String,
    "likes":[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Login"
        }
    ]
});
 const NewPostModel=mongoose.model('post',newPostSchema)
module.exports=NewPostModel;