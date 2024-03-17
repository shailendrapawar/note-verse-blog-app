const mongoose=require('mongoose');


const authSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     age:{
        type:Number
    },
    email:{
        type:String,
        require:true,
        unique:true
    },name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const authModel=mongoose.model('auths',authSchema);

module.exports=authModel;