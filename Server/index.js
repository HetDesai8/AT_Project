const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const port=5000
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/registerdemo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username:String,
    password: String
})
const User = new mongoose.model("User", userSchema)
app.post("/Login",(req,res)=>{
    const {username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

app.post("/Register",(req,res)=>{
    const { name, email,username, password} = req.body
    User.findOne({username: username}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                username,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
})


app.listen(port,()=>{
    console.log(`Example app listing at at port http://localhost:${port}`)
})