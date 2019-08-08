const express = require('express')

const router = express.Router()
router.use(express.urlencoded())

const Movie = require('../models/movieClass')

let movieInfo = []
let genreList = []

router.get('/', (req, res) => {
    res.render('movies', {movieList: movieList})
})


router.get('/addMovie', (req, res) => {
    res.render('addMovie')
})

router.get('/genres', (req, res) => {
    res.render('genres', {movieList: movieList})
})

router.get('/deleteMovie', (req, res) => {
    res.render('deleteMovie', {movieList: movieList})
})

router.get('/:movieID', (req, res) => {
    let movieID = req.params.movieID
    let movieInfo = movieList.filter(movie => {

        return movie.movieID == movieID
    })
    console.log(movieInfo)
    res.render('movieDetails', {movieInfo : movieInfo})
})






router.get('/genres/:genre', (req, res) => {
    console.log(movieList)
    let genre = req.params.genre
    let genreList = movieList.filter(movie => {
        return movie.genre == genre
    })
    console.log(genreList)
    res.render('viewGenre', {genreList : genreList})
})





//add movie
router.post('/add-movie', (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let image = req.body.image
    let movieID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    let newMovie = new Movie(title, description, genre, image, movieID)

    movieList.push(newMovie)
    res.redirect('/movies')
})

//delete movie
router.post('/delete-movie', (req, res) => {
    let movieName = req.body.movieName
    movieList = movieList.filter(movie => {
        return movie.movieID != movieName
    })

    res.redirect('/movies')
})







module.exports = router