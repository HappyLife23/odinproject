import mongoose from "mongoose";
// tried to move POST to router but it didnt work???
const actorSchema = new mongoose.Schema(
    {
        name: String,
        superpower: String,
        image: String,
        description: String,
        background: String
    },
    // Skapar en ny kollektion
    // {collection: 'movies'}
);

export  {actorSchema};