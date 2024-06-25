import imports from "./globalImport.mjs";
const { express, fs, path, fileURLToPath, nanoid, connectToMongodb, postPost, movieModel} = imports;

export const id = nanoid();
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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', postPost);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(PORT, () => {
    console.log(`App is running on localhost: http://localhost:${PORT}`);
});


export { posts, pathToPosts, updateDatabase }
