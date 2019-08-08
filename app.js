const express = require('express')
const app = express()
const path = require('path')
const movieRouter = require('./routes/movies')

const VIEWS_PATH = path.join(__dirname, '/views')

app.use('/movies', movieRouter)

app.use(express.urlencoded())

const mustacheExpress = require('mustache-express')
//tell express to use mustache templating engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
//the pages are located in the views directory
app.set('views', VIEWS_PATH)
//extension will be .mustache
app.set('view engine', 'mustache')


//importing Class Movie from movieClass.js
//const Movie = require('./models/movieClass')

global.movieList = []


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/api/movies', (req, res) => {
    res.json(movieList)
})



app.listen(3000, () =>{
    console.log("Movie Server is Running!")
})
