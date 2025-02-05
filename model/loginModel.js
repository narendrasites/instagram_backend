const mongoose =require('mongoose');
const loginSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
});
 const LoginModel=mongoose.model('login',loginSchema)
module.exports=LoginModel;