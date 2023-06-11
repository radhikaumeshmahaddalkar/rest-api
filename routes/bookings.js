const express =require('express')
const router = express.Router()
const mongoose =require('mongoose')
const Movie= require('../model/booking')

const BookingController =require('../controller/booking_model')


router.post('/',BookingController.createBooking)
router.get('/',BookingController.getBooking)
router.get('/:bookingId',BookingController.getBookingById)
router.put('/:bookingId',BookingController.updateBooking)
router.delete('/:bookingId',BookingController.deleteBooking)

module.exports=router