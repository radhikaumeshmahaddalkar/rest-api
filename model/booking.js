const mongoose =require('mongoose')
const Schema= mongoose.Schema

const bookingSchema= Schema({
    _id:Schema.Types.ObjectId,
    mName:{type:String,require:true},
    date:{type:String, require:true},
    time:{type:String,require:true},
    seat:{type:String, require:true},
    gPrice:{type:String,require:true},
    sPrice:{type:String,require:true}
})

module.exports= mongoose.model("Booking",bookingSchema)