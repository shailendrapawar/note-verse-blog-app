const authModel = require('../models/authModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
class LoginControllers {


    //for registeration of new user
    static register = async (req, res) => {
        const { name, age, email, password } = req.body;
        try {
            const result = await authModel.findOne({ email: email })
            if (result == null) {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);

                const newUser = new authModel({
                    name: name,
                    email: email,
                    age: age,
                    password: hashPassword
                })
                const isCreated = await newUser.save()
                res.send({msg:"user created",value:true})
            }  
            else {
                res.send({msg:"email already used",value:false})
              
            }
        } catch (e) {
            console.log(e.message)
        }
    }


//============user login==========================//

    static login = async (req, res) => {
        const { email, password } = req.body;
        const user = await authModel.findOne({ email: email });
        if (user) {
            let pass = await bcrypt.compare(password, user.password);
            if (pass) {
                const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "5d" })
                res.status(200).send({ msg: "autentic user", token: token, userName: user.name,value:true,email:user.email });
            } else {
                res.send({msg:"wrong credentials",value:false})
            }

        } else {
            res.send({msg:"user is not registered",value:false})
        }



    }







}


module.exports = LoginControllers