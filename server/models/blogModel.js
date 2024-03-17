const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    blogImage:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    email:{
        type:String
    }
})

const blogModel=mongoose.model('blogs',blogSchema);

module.exports=blogModel;