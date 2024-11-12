const { docClient } = require('../config/db');

const movies = [
    {
        year: 2016,
        title: 'Sahenshah',
        genre: ['Action', 'Drama'],
        rating: '8',
        info: 'Rishte mai toh hum tumhare Baap lagte hai'
    },
    {
        year: 2018,
        title: 'Sonu ki Tweety ki Sweety',
        genre: ['Friendship', 'Drama', 'Comedy'],
        rating: '8.5',
        info: 'Tere jaisa yaar kaha!, kaha aisa yaarana'
    },
    {
        year: 2019,
        title: 'TeesMarKha',
        genre: ['Chori', 'Action', 'Scam'],
        rating: '6',
        info: 'Mere desh ki dharti...Sona ugle ugle heere moti'
    },
    {
        year: 2020,
        title: 'Rowdy Rathore',
        genre: ["Action", 'Thriller'],
        rating:' 7.5',
        info: 'Mai jo kehta hu wo mai krta hu, aur jo mai nhi kehta wo definitely krta hu!'
    }
];

async function insertMovie(movie) {
    const params = {
        TableName: 'Movie',
        Item: {
            MovieId: `Movie#${movie.year}`,  
            ReleaseDate: `${movie.year}-01-10`,
            Title: movie.title,
            Genre: JSON.stringify(movie.genre,null),
            Rating: movie.rating,
            Information: movie.info
        }
    };

    try {
        //not working with low level DynnamoDB class- why?
        await docClient.put(params).promise(); 
        console.log(`${movie.title} inserted successfully`);
    } catch (err) {
        console.error("Unable to insert movie:", JSON.stringify(err, null, 2));
    }
}

async function insertMovies() {
    for (const movie of movies) {
        await insertMovie(movie);
    }
    console.log("All movies inserted");
}

insertMovies();
