const mongoose = require('mongoose');

//schema designs
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name is required"]
    },
    email: {
        type: String,
        required:[true, "Email is required & Uniquely identified Only"],
        unique: true,

    },
    password:{
        type: String,
        required: [true , "Password is required , Please Use it Strong"],
        
    },

},
{timestamps: true }
); 


//export
const userMOdel = mongoose.model('users',userSchema)
module.exports = userMOdel;

