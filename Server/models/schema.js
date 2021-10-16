const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username:String,
    password: String,
    cart:Array
})
module.exports = mongoose.model("User", userSchema)