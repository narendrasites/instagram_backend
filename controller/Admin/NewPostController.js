const NewPostModel =require('../../model/newPostModel');
const NewPostController=async(req,res)=>{
    // console.log(req.body,req.file);
 let postResult= NewPostModel({caption:req.body.caption,description:req.body.description,image:req.file.filename,userid:req.body.userId});
   let response= await postResult.save();
    // console.log(response);
    res.json({message:"Post Successfully added..",success:true,loginData:req.body.userData})

}
module.exports =NewPostController;