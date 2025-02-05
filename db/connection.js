const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://rajput10092001:XsSFAUN7AWMwHULU@instaapp.cjtaffb.mongodb.net/?retryWrites=true&w=majority`).then((res) => {
    console.log('connection succesfully');
}).catch((error) => {
    console.log('connection error', error);
})
module.exports = mongoose