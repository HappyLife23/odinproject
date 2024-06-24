import express from 'express';
import mongoose from 'mongoose';
import { movieModel } from '../models/movieModel.mjs';

const router = express.Router();



router.get('/', async (request, response) => {
    try {
        let movies = await movieModel.find();
        response.render('index', { movies });
    } catch (error) {
        response.status(500).send({ msg: 'error' });
        console.log('Error', error)
    }
});




export {router as postPost}