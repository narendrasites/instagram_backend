  const LoginModel= require('../../model/loginModel');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
const   AdminLoginControler= async (req,res)=>{
console.log("Controler Called");
const authData= await LoginModel.findOne({email:req.body.email});
// console.log(result);
if(authData!=null){
  // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//   // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//   // result == false
// });

bcrypt.compare(req.body.password, authData.password, function(err, result) {
    // result == true
    // console.log(result);
  if(result){
// generate a token for logged in user
jwt.sign({userAuthData:authData},process.env.SECRET_KEY,{expiresIn:"1hr"},(error,token)=>{
// console.log(token);
if(error){
  res.json({message:"Invalid User",success:false})}else{
    res.json({message:"Login Successfully",success:true,token});
  }
})

  }
  else{
    res.json({message:"Invalid User",success:false})
  }
  });
}
else{
  res.json({message:"Invalid User",success:false});
}
  }
  module.exports=AdminLoginControler;