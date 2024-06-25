import express from 'express';
import { movieModel } from '../models/movieModel.mjs';
import { updateDatabase } from '../app.mjs';
import { posts } from '../app.mjs';
import { id } from '../app.mjs';

const router = express.Router();

// GET
router.get('/', async (request, response) => {
    try {
        let movies = await movieModel.find();
        response.render('index', { movies });
    } catch (error) {
        response.status(500).send({ msg: 'error' });
        console.log('Error', error)
    }
});

// POST 
router.post('/', async (request, response) => {
    const { name, superpower, image, description, background } = request.body;
    const newMovie = new movieModel({
        name: name,
        superpower: superpower,
        image: image,
        description: description,
        background: background
    })

    try {
        const savedMovie = await newMovie.save();
        posts.push(savedMovie);
        updateDatabase();
        response.status(201).send('Movies saved successfully.');
        
    } catch (error) {
        console.error('Error saving movie', error);
        response.status(500).send('Error saving movie.')
    } 
});

// Denna uppdaterar JSON-filen men inte mongodb
router.patch('/:id', (request, response) => {
    const {  body, params: { id } } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).send({msg: '400. Bad Request. Invalid I'})
    }
    const postIndex = parsedId - 1;
    const currentPost = posts[postIndex];
    if (!currentPost) {
        return response.status(404).send({msg: '404. Page not found.'})
    }
    posts[postIndex] = { ...currentPost, ...body }
    updateDatabase()
    return response.sendStatus(200);
    
});



export {router as postPost}