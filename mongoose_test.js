const mongoose= require('mongoose')
const uri= "mongodb+srv://radhika:radhika123@cluster0.f225zvy.mongodb.net/UserDB"

mongoose.connect(uri)
.then(()=>{
    console.log("Connection Established Successfully")
})