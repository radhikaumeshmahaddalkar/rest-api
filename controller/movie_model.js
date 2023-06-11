const mongoose =require('mongoose')
const Movie =require('../model/movie')

//C from CRUD 

exports.createMovie = async(req,res)=>{

    try{
        const movie =new Movie ({
            _id: new mongoose.Types.ObjectId(),
            mName:req.body.mName,
            desc: req.body.desc,
            gPrice: req.body.gPrice,
            sPrice: req.body.sPrice
        })
        const data = await movie.save();
        res.status(200).json({
            msg:"Movie Created Successfully",
            movie:data
        })
    }
    catch(err){
        res.status(200).json({
            code:10,
            msg:" Something Went wrong",
            err:err
        })
    }

}

// R from CRUD[GET all]

exports.getmovie = async (req, res) => {
    try {
        const movie = await Movie.find();
        // Get all the documents from the controller

        res.status(200).json({
            msg: "All documents fetched successfully",
            movie: movie
        })
    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}


//R from CRUD [GET single]

exports.getmovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        //GET a single document from the collection
        let n = ""
        if (movie === null) {
            n = "No matching document found"
        } else {
            n = "Document fetched Successfully"
        }

        res.status(200).json({
            msg: n,
            movie: movie
        })
    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// U from CRUD[PUT]

exports.updateMovie= async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body);
        res.status(200).json({
            msg: "Movie updated successfully",
            movie:movie
        })
    }catch(err){
        res.status(501).json({
            code:10,
            msg:"something went wrong",
            err:err
        })
    }
    
}

// D from CRUD [DELETE]

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.movieId);
        res.status(200).json({
            msg: "Movie  deleted Successfully",
            movie: movie
        })
    }
    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}