const mongoose = require("mongoose");
const { stringify } = require("querystring");

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            requried:true,
            unique:true
        },
        description:{
            type:String,
            requried:true,
        },
        photo:{
            type:String,
            requried:false,
        },
        username:{
            type:String,
            requried:true,

        },
        categories:{
            type:Array,
            required:false,
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Post", PostSchema);