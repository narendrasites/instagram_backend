const NewpostModel=require("../../model/newPostModel")
const Likes=async(req, res)=>{
// console.log("Likes Controller Called: ",req.body);
let response= await NewpostModel.updateOne({_id:req.body.postId},{
    $push:{
   "likes":req.body.userData._id 
    }
});
// console.log(response);
res.json({like_value:true});
}
module.exports=Likes;