const express=require('express');
const app=express();
const userRouter=require('./routes/userRouter')
const connectDB=require('./config/mongoDB')
connectDB()
const cors=require('cors');
const path=require('path')

app.use("/public",express.static(path.join(__dirname,"public")))
// app.use(express.static("public/uploads/"));

app.use(express.json())



app.use(cors())
// app.post('/login',(req,res)=>{
//     res.send(req.body)
// })
app.use(userRouter)


app.listen(3000,()=>{
    console.log("server listening")
})

//http://127.0.0.1:3000/public/uploads/1709959004497-js-icon.png