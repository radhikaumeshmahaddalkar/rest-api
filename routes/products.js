const express=require('express')
const router = express.Router()
const mongoose =require('mongoose')
const Product = require('../model/product')
const productController= require('../controller/product_model')

//Handle a GET request for product

router.get('/',productController.getProduct)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is a GET request for product"
//     })
// })

//Handle POST request for product

router.post('/',productController.createProduct)
// (req,res)=>{
//     //  console.log(req.body)
//     //  console.log(req.body.name)
//     //  console.log(req.body.price)


//     // Create an object of the model

//    const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price
//    })

//     //2. Save this to the database

//     product.save()
//     .then((res)=>{
//         console.log(res)
//     })

//     .catch((err)=>{
//         console.log(err)
//     })

//     // const tempProduct={
//     //     name: req.body.name,
//     //     price: req.body.price
//     // }

//     // const p = req.body
//     // console.log("[TYPE]:" +typeof req.body)

//     res.status(200).json({
//         msg:"This is a POST request for product",
//         statusMsg:"Product created successfully",
//         product: product
//     })
// })

//Handle a GET request for a single product

// router.get('/:productId',(req,res)=>{
//     res.status(200).json({
//         msg:"This is a GET request for a single product"
//     })
// })

router.get('/:productId',productController.getProductById)
// (req,res)=>{
//     const id= req.params.productId
//     if(id=='7'){
//         res.status(200).json({
//             msg: " congrats! you have a special id with good cashback"
//         })
//     }
//     else{
//         res.status(200).json({
//             msg:"oops! you have a regular cashback"
//         })
//     }
// })


//Handle a PUT request for  product

router.put('/:productId',productController.updateProduct)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is a PUT request for a single product",
//         id:id
//     })
// })

//Handle a DELETE request for  product

router.delete('/:productId',productController.deleteProduct)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is a DELETE request for a single product",
//         id:id
//     })
// })

module.exports=router