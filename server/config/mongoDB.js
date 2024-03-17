const mongoose=require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

const connectDB=async()=>{

   let res=await mongoose.connect('mongodb://127.0.0.1:27017/mernBlog')

   res?console.log(" DB conected"):console.log(" DB connection failed")

}


module.exports=connectDB;