const express =require('express')
const router = express.Router()
const mongoose =require('mongoose')
const Movie= require('../model/movie')

const movieController =require('../controller/movie_model')

router.post('/',movieController.createMovie)
router.get('/',movieController.getmovie)
router.get('/:movieId',movieController.getmovieById)
router.put('/:movieId',movieController.updateMovie)
router.delete('/:movieId',movieController.deleteMovie)

module.exports=router