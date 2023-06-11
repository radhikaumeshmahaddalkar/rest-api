const mongoose = require('mongoose')
const Users = require('../model/user');

//C from CRUD POST[]

exports.createUsers = async (req, res) => {
    try {
        // Create a product object

        const users = new Users({
            _id: new mongoose.Types.ObjectId(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            mobNo: req.body.mobNo,
            pass: req.body.pass,
            addr: req.body.addr
        })

        const data = await users.save();
        res.status(200).json({
            msg: "User created successfully",
            users: data
        })
    }
    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET all]

exports.getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        // Get all the documents from the controller

        res.status(200).json({
            msg: "All documents fetched successfully",
            users: users
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

exports.getUsersById = async (req, res) => {
    try {
        const users = await Users.findById(req.params.userId);
        //GET a single document from the collection
        let n = ""
        if (users === null) {
            n = "No matching document found"
        } else {
            n = "Document fetched Successfully"
        }

        res.status(200).json({
            msg: n,
            users: users
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

exports.updateUser = async (req, res) => {
    try {
        const movie = await Users.findByIdAndUpdate(req.params.userId, req.body);
        res.status(200).json({
            msg: "Movie updated successfully",
            movie: movie
        })
    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "something went wrong",
            err: err
        })
    }

}


// D from CRUD [DELETE]

exports.deleteUser = async (req, res) => {
    try {
        const movie = await Users.findByIdAndDelete(req.params.userId);
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