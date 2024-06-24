import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import { connectToMongodb } from './connect-to-mongodb/mongodb.mjs'
import fs from 'fs';
import { postPost } from './routes/index.mjs'
import { movieModel } from './models/movieModel.mjs';

const id = nanoid();
const app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const pathToPosts = path.join(__dirname, './json/movies.json');
const posts = JSON.parse(fs.readFileSync(pathToPosts, 'utf-8'));

connectToMongodb();


const updateDatabase = () => {
    fs.writeFileSync(pathToPosts, JSON.stringify(posts, null, 2), 'utf-8');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/movies', postPost);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', async (request, response) => {
 
    try {
        let movies = await movieModel.find();
        response.render('index',{movies});
    } catch (error) {
        response.status(500).send('Server not found.')
        console.error(error);
    }
});


// tried to move POST to router but it didnt work???
const actorSchema = new mongoose.Schema(
    {
        name: String,
        superpower: String,
        image: String
    },
    // Skapar en ny kollektion
    // {collection: 'movies'}
);

// const Movie = mongoose.model('Movie', actorSchema, 'actors');
// const movieModel = mongoose.model('Movie', actorSchema, 'actors');
app.post('/', async (request, response) => {
    const { name, superpower, image } = request.body;
    const newMovie = new movieModel({
        name: name,
        superpower: superpower,
        image: image
    })

    try {
        const savedMovie = await newMovie.save();
        posts.push(savedMovie);
        // response.status(201).json(savedMovie);
        console.log('savedmovie:', savedMovie);
        updateDatabase();
        
    } catch (error) {
        console.error('Error saving movie', error);
        response.status(500).send('Error saving movie.')
    } 
});


app.listen(PORT, () => {
    console.log(`App is running on localhost: http://localhost:${PORT}`);
});


export { posts, pathToPosts, updateDatabase, actorSchema}
