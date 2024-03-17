const blogModel = require('../models/blogModel')
const fs = require('fs')

class BlogControllers {

    static addBlog = async (req, res) => {
        const { title, desc, author, email, category } = req.body;
        const blogImage = req.file.filename;
        try {
            const newBlog = new blogModel({
                title: title,
                desc: desc,
                author: author,
                blogImage: `http://127.0.0.1:3000/public/uploads/` + blogImage,
                email: email,
                category: category
            })
            const result = await newBlog.save();

            res.send(result)
            // console.log(req.file.filename);
        } catch (err) {
            res.send({ err: err, status: 400 });
        }
    }

    static getAllBlogs = async (req, res) => {
        const result = await blogModel.find({})
        res.status(200).json(result);
    }

    static getSingleBlog = async (req, res) => {
        const { id } = req.params;
        const result = await blogModel.findById({ _id: id });
        res.status(200).json(result)
    }

    static deleteBlog = async (req, res) => {

        const { id } = req.params;
        const result = await blogModel.findByIdAndDelete({ _id: id });
        //original name of image and deleting it//
        const image = result.blogImage.slice(37);
        fs.unlinkSync(`./public/uploads/${image}`)

        res.status(200).json(result);
    }

    static updateBlog = async (req, res) => {
        const { title, desc, category } = req.body;
        const { id } = req.params;
       
        const result = await blogModel.findByIdAndUpdate(id, {
            $set: {
                title: title,
                desc: desc,
                category: category,
            }
        })
        res.send(result);
    }

    static getEmailBlogs = async (req, res) => {
        const { email } = req.body;
        const result = await blogModel.find({ email: email })
        res.send(result);
    }

    static unlinkFile=async(req,res)=>{
     
        const { id } = req.params;
        const result = await blogModel.findById({ _id: id });
        const imageUrl = result.blogImage.slice(37);
        fs.unlinkSync(`./public/uploads/${imageUrl}`)
        res.send("file unlinked")
    }

}

module.exports = BlogControllers