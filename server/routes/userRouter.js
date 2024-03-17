const express=require('express');
const LoginControllers=require('../controllers/LoginControllers')
const BlogControllers=require('../controllers/BlogControllers');
const AuthorControllers=require('../controllers/AuthorControllers')
const CategoryController=require('../controllers/CategoryControllers')
const multer=require('multer');

const userRouter=express.Router()

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"public/uploads")
    },
    filename:function(req,file,cb){
       return cb(null,`${Date.now()}-${file.originalname}`)

    }
})

const upload=multer({storage:storage})


//public routes
userRouter.post('/register',LoginControllers.register);
userRouter.post('/login',LoginControllers.login);


//protected routes

//reading blog
userRouter.get('/allblogs',BlogControllers.getAllBlogs)
userRouter.get('/singleBlog/:id',BlogControllers.getSingleBlog)


//adding blog
userRouter.post('/addBlog',upload.single("blogImage"),BlogControllers.addBlog);


//deleting blog
userRouter.delete('/deleteBlog/:id',BlogControllers.deleteBlog);

//update blog
userRouter.put('/updateBlog/:id',BlogControllers.updateBlog)

//get single author
userRouter.get('/getAllAuthors',AuthorControllers.getAllAuthors);
userRouter.get('/getSingleAuthor/:id',AuthorControllers.getSingleAuthor);

//get all blogs using email===============
userRouter.post("/getEmailBlogs",BlogControllers.getEmailBlogs)

//to un link a file in server===================
userRouter.delete("/unlinkFile/:id",BlogControllers.unlinkFile)

///
userRouter.get("/singleCategory/:name",CategoryController.getSingleCategory)

module.exports=userRouter