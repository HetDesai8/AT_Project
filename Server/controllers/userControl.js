const express = require("express")
const User = require("../models/schema")
const MultipleFile = require("../models/multiplefile")
const { use } = require("../routes/userRouter")
const multiplefile = require("../models/multiplefile")
userLogin = async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
}

userRegister = async (req, res) => {
    const { name, email, username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                username,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}
userViewItem = async (req, res) => {
    const { username } = req.body
    var cart_item = [];
       User.findOne({ username: username }, (error, user) => {
        if (user) {
            for(let i=0;i<user.cart.length;i++)
            {
                    MultipleFile.findOne({ _id: user.cart[i] }, (error, property) => {
                    cart_item.push(property)
                    if(i==user.cart.length-1)
                    {
                        
                        res.send({ message: "Successfully View cart",data:cart_item })
                    }                  
                }) 
            }          
        }
        else {
            res.send({ message: "Error" })
        }
    })
}
userDeleteItem = async (req, res) => {
    const { itemId, username } = req.body
    User.updateOne({ username: username },{$pull:{"cart": itemId}},(err,user)=>{
        if(user){
            // console.log(user)
            res.send({ message: "Successfully Delete Item From Cart"})
        }
        else{
            res.send({ message: "Error In Delete Item From Cart" })
        }
    })
    

}
userAddItem = async (req, res) => {
    const { itemId, username } = req.body
    User.updateOne({ username: username }, { $push: { "cart": itemId } }, (err, user) => {
        if (user) {
            
            res.send({ message: "Successfully Added Into Cart" })
        } else {
            res.send({ message: "Some Error Not Added Into Cart" })
        }
    })
}

module.exports = {
    userLogin,
    userRegister,
    userViewItem,
    userDeleteItem,
    userAddItem,
}