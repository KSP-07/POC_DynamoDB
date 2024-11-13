
const { docClient } = require('../config/db');

const movies = [
    {
        MovieId:'Movie#2019',
        ReleaseDate : '2019-01-10',
        title: 'Sahenshah',
        Genre: 'Comedy',
        rating: '8',
        info: 'Rishte mai toh hum tumhare Baap lagte hai'
    },
    {
        MovieId:'Movie#2019',
        ReleaseDate : '2019-04-10',
        title: 'Sonu ki Tweety ki Sweety',
        Genre: 'Comedy',
        rating: '8.5',
        info: 'Tere jaisa yaar kaha!, kaha aisa yaarana'
    },
    {
        MovieId:'Movie#2019',
        ReleaseDate : '2019-03-10',
        title: 'TeesMarKha',
        Genre: 'Chori',
        rating: '6',
        info: 'Mere desh ki dharti...Sona ugle ugle heere moti'
    },
    {
        MovieId:'Movie#2019',
        ReleaseDate : '2019-02-10',
        title: 'Rowdy Rathore',
        Genre: 'Comedy',
        rating:' 7.5',
        info: 'Mai jo kehta hu wo mai krta hu, aur jo mai nhi kehta wo definitely krta hu!'
    }
];


async function batchInsert(){
    const requests = movies.map(movie => ({
        PutRequest  : {Item : movie}
    }));

    const params = {
        RequestItems : {'Movie' : requests}
    };

    try{
        await docClient.batchWrite(params).promise();
        console.log("Batch insert completed");
    }
    catch(err){
        console.log('Got an error : ',err);
    }
}

batchInsert();