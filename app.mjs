import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import { connectToMongodb } from './connect-to-mongodb/mongodb.mjs'
import fs from 'fs';
import {postPost} from './routes/index.mjs'

const id = nanoid()
console.log('Generated ID:', id);
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
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (request, response) => {
    // return response.status(200).send('Please do a little koding everyday for your future.');
    const header = 'Home';
    const title = 'homepage'
    response.render('index', {header: header, title: title});
});


// tried to move POST to router but it didnt work???
const actorSchema = new mongoose.Schema(
    {
        title: String,
        superpower: String
    },
    // Skapar en ny kollektion
    // {collection: 'movies'}
);

const Movie = mongoose.model('Movie', actorSchema, 'actors');

app.post('/movies', async (request, response) => {
    const { title, superpower } = request.body;
    const newMovie = new Movie({
        title: title,
        superpower: superpower
    })

    try {
        const savedMovie = await newMovie.save();
        console.log('savedmovie:', savedMovie);
        posts.push(savedMovie);
        updateDatabase();
        
    } catch (error) {
        console.error('Error saving movie', error);
        response.status(500).send('Error saving movie.')
    } 
});

app.use('/movies', postPost);

app.listen(PORT, () => {
    console.log(`App is running on localhost: http://localhost:${PORT}`);
});


export { posts, pathToPosts, updateDatabase, actorSchema }
