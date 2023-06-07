const mongoose = require('mongoose')
const Product= require('../model/product')


//C from CRUD POST[]

exports.createProduct = async(req,res)=>{
    try{
        // Create a product object

        const product= new Product({
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })

        const data= await product.save();
        res.status(200).json({
            msg: "Product created successfully",
            product: data
        })
    }
    catch(err){
        res.status(200).json({
            code:10,
            msg:"Something went wrong",
            err:err
        })
    }
}

// R from CRUD[GET all]

exports.getProduct= async(req,res)=>{
    try{
        const products= await Product.find();
        // Get all the documents from the controller

        res.status(200).json({
            msg:"All documents fetched successfully",
            data:products
        })
    }catch(err){
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err:err
        })
    }
}

//R from CRUD [GET single]

exports.getProductById = async(req,res)=>{
    try{
        const product= await Product.findById(req.params.productId);
        //GET a single document from the collection
        let n =""
        if(product===null){
            n="No matching document found"
        }else{
            n="Document fetched Successfully"
        }

        res.status(200).json({
            msg:n,
            data: product
    })
}catch(err){
    res.status(501).json({
        code:10,
        msg:"Something went wrong",
        err:err
    })
}
}


// U from CRUD[PUT]

exports.updateProduct= async(req,res)=>{
    try{
        const data= await Product.findByIdAndUpdate(req.params.productId,req.body);
        res.status(200).json({
            msg:"Product Updated Successfully",
            product:data
    })
}
catch(err){
    res.status(501).json({
        code:10,
        msg:"Something went wrong",
        err:err
    })
}
}


// D from CRUD [DELETE]

exports.deleteProduct= async(req,res)=>{
    try{
        const data= await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json({
            msg:"Product deleted Successfully",
            product:data
    })
}
catch(err){
    res.status(501).json({
        code:10,
        msg:"Something went wrong",
        err:err
    })
}
}
