
const blogModel=require('../models/blogModel');


class CategoryController{

    static getSingleCategory=async(req,res)=>{
        const name=req.params.name.toLowerCase();
        const result=await blogModel.find({category:name});
        res.send(result);
    }
}

module.exports=CategoryController;