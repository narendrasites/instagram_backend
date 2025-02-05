//  password:XsSFAUN7AWMwHULU
// username:rajput10092001
// mongodb+srv://rajput10092001:XsSFAUN7AWMwHULU@instaapp.cjtaffb.mongodb.net/?retryWrites=true&w=majority


const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('./db/connection')
const cors =require('cors');
const bodyparser = require('body-parser')
const app=express();
const router =require('./routes/router');

dotenv.config();
// middileware

// cors
app.use(cors());

// body-parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use( '/public/uploads',express.static('public/uploads'))
// router
app.use(router);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on this ${process.env.PORT}`);
})