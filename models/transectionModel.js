const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
    {
    userid:{
        type:String,
        required: [true,"User ID is Required"],
    },
    amount:{
        type:Number,
        required: [true,"Amount is Required"],
    },
    type:{
        type: String,
        required:[true,"Type is Required"],
    },
    category:{
        type: String,
        required:[true,"Category is Required"],
    },
    reference:{
        type:String,
    },
    description:{
        type: String,
        required:[true, "Description is Required"],
    },
    date:{
        type: Date,
        required:[true, "Date is Required"]
    },
}, { timestamps: true })

const transectionModel = mongoose.model("transections", transectionSchema);

module.exports = transectionModel;
