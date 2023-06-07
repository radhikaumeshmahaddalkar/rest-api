const express= require('express')
const app = express()
const productsRouter= require('./routes/products')
const morgan= require('morgan')
const bodyparser =require('body-parser')
const mongoose =require('mongoose')
const cors = require('cors')



// app.use((req,res)=>{
//     res.status(200).json({
//         msg: "This is simple GET request"
//     })
// })
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({extended:true}))
app.use(
  cors({origin:"http://localhost:4200"
       })
)

app.use(morgan("dev"))
const uri = "mongodb+srv://radhika:radhika123@cluster0.f225zvy.mongodb.net/test"
mongoose.connect(uri)

app.use('/products', productsRouter)


module.exports=app
