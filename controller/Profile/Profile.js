const PostsModel=require("../../model/newPostModel")
const Profile=async(req, res)=>{
// console.log('Profile Controller Called',req.body);
let result=await PostsModel.find({userid:req.body.userData._id});
if(result.length>0){
    res.json({user_post_data:result});
}
}
module.exports=Profile;