 const PostsModel=require('../../model/newPostModel')
const AllProducts= async(req,res)=>{
    console.log(req.body);
   let posts_results= await PostsModel.find({}).sort({_id:-1});
//    console.log(posts_results);
if(posts_results.length>0){
    res.json({postsData:posts_results,success:true,loginData:req.body.userData});

}else{
    res.json({message:"not found posts",success:"false"}); 
}

}
module.exports=AllProducts;