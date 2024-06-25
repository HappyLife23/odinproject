import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import { connectToMongodb } from './connect-to-mongodb/mongodb.mjs'
import { postPost } from './routes/index.mjs'
import { movieModel } from './models/movieModel.mjs';
import { actorSchema } from './schema/actorSchema.mjs';

const imports =  { express, fs, mongoose, path, fileURLToPath, nanoid, connectToMongodb, postPost, movieModel, actorSchema };

export default imports;