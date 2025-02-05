const jwt =require('jsonwebtoken');
const AuthMiddleware=(req,res,next)=>{
// console.log("AuthMiddleware called");
// console.log(req.headers);
// console.log(req.headers.authorization.split(" ")[1]);
const token=req.headers.authorization.split(" ")[1];
jwt.verify(token,process.env.SECRET_KEY,(error,decode)=>{
    if(error){
        res.json({message:"Invalid token",success:false})
    }
    else{
        // decode token
        // console.log(decode.userAuthData);
        req.body.userData=decode.userAuthData
        next();
    }
})
}
module.exports=AuthMiddleware;