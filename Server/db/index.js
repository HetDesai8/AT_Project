const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/registerdemo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB connected")
})
const db = mongoose.connection

module.exports = db