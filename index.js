import express from 'express'
import cors from 'cors'
import{addNewMovie, getAllMovies} from './src/movies.js'

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/movies', getAllMovies)
app.post('/movies', addNewMovie)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})