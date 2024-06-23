import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        superpower: {
            type: String,
            required: true           
        }
    }
)

const movieModel = mongoose.model('movies', moviesSchema);


export { movieModel }




// export { actorModel }