const authModel=require('../models/authModel');


class AuthorControllers{

    static getAllAuthors=async(req,res)=>{
        const result=await authModel.find({}).select("-password").select("-email")
        res.send(result);

    }
    static getSingleAuthor=async(req,res)=>{
        
        const {id}=req.params
        const result=await authModel.findOne({_id:id});
    
        res.send(result);
    }
}

module.exports=AuthorControllers;