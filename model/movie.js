const mongoose =require('mongoose')
const Schema= mongoose.Schema

const movieSchema= Schema({

    _id: Schema.Types.ObjectId,
    mName : {type:String, require:true},
    desc: {type:String, require:true},
    gPrice:{type:String, require:true},
    sPrice:{type:String, require:true}

})

module.exports= mongoose.model("Movie",movieSchema)