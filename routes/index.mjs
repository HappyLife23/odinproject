import express from 'express';
import mongoose from 'mongoose';
// import { actorModel } from '../models/actorModel.mjs';
import { movieModel } from '../models/movieModel.mjs';

const router = express.Router();



router.get('/movies', async (request, response) => {
    try {
        let posts = await movieModel.find();
        response.render('index', { posts });
    } catch (error) {
        response.status(500).send({ msg: 'error' });
        console.log('Error', error)
    }
});



export {router as postPost}