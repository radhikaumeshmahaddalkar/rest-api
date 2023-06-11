const mongoose = require('mongoose')
const Booking = require('../model/booking')

exports.createBooking = async (req, res) => {

    try {
        const booking = new Booking({
            _id: new mongoose.Types.ObjectId(),
            mName: req.body.mName,
            date: req.body.date,
            time: req.body.time,
            seat: req.body.seat,
            gPrice: req.body.gPrice,
            sPrice: req.body.sPrice
        })

        const data = await booking.save();
        res.status(200).json({
            msg: "Movie Created Successfully",
            movie: data
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

exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.find();
        // Get all the documents from the controller

        res.status(200).json({
            msg: "All documents fetched successfully",
            booking: booking
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

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.bookingId);
        //GET a single document from the collection
        let n = ""
        if (booking === null) {
            n = "No matching document found"
        } else {
            n = "Document fetched Successfully"
        }

        res.status(200).json({
            msg: n,
            booking: booking
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

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.bookingId, req.body);
        res.status(200).json({
            msg: "Booking updated successfully",
            booking: booking
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

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.bookingId);
        res.status(200).json({
            msg: "Movie  deleted Successfully",
            booking: booking
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