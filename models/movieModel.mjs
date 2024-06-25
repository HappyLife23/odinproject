import mongoose from "mongoose";

/* Din movieModel.mjs ser korrekt ut, men observera att när du 
skapar en Mongoose - modell, namnet på samlingen bör inte vara 
pluraliserat av Mongoose om du inte anger det explicit.Låt oss 
använda "Movie" som modellnamn och "movies" som samlingsnamn: */
const moviesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        superpower: {
            type: String,
            required: true           
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        }
    }
)
// Använd "movies" som namnet på samlingen
//används movies/actors som namnet på den MongoDB-samling som modellen kommer att interagera med
const movieModel = mongoose.model('Movie', moviesSchema, 'actors');


export { movieModel }
