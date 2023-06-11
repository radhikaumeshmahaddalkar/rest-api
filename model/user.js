const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = Schema({
    _id: Schema.Types.ObjectId,
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true },
    mobNo: { type: String, require: true },
    pass: { type: String, require: true },
    addr: { type: String, require: true }
})

module.exports = mongoose.model("Users", usersSchema)