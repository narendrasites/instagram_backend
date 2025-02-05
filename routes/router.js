const express=require('express');
const  AdminLoginControler  = require('../controller/Admin/AdminLoginControler');
const NewPostController = require('../controller/Admin/NewPostController');
const router =express.Router();
const AuthMiddleware=require('../middleware/AuthMiddleware');
const multer  = require('multer');
const AllProducts = require('../controller/Admin/AllProducts');
const Signup = require('../controller/User/Signup');
const Profile = require('../controller/Profile/Profile');
const Likes = require('../controller/Likes/Likes');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
router.get('/',(req,res)=>{
    res.send('Welcome to the InstaApp'); 
})
// Admin Login Request
router.post("/api/login",AdminLoginControler);
// New Post Request
router.post("/api/create-post",AuthMiddleware,upload.single('postimage') ,NewPostController);
// get All posts
router.get("/api/all-posts", AuthMiddleware, AllProducts)
module.exports=router;
// signup
router.post("/api/signup",Signup)
// profile
router.get('/api/profile',AuthMiddleware, Profile)
// Likes
router.put("/api/likes",AuthMiddleware,Likes)
