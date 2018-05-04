require("dotenv").config();

// write twitter function 
// write spotify function
// write OMDB function
var twitter = require("twitter")
var spotify = require("node-spotify-api")
var request = require("request")
// var keys = require("./keys.js")
var fs = require("fs")

var input1 = process.argv[2]
var input2 = process.argv[3]

if (input1 === 'my-tweets') {
    //call the function here
    console.log("you chose my-tweets")
} else if (input1 === "spotify-this-song") {
    //call the function here
    console.log("you chose spotify-this-song")
} else if (input1 === "movie-this") {
    //call the function here
    movie(input2)
    console.log("you chose movie-this")
} else if (input1 === "do-what-it-says") {
    //call the function here    
    // do what is says points to random.txt (whatever the text doc says)
    console.log("you chose do-what-it-says")
} else {
    console.log("please re-enter your option")
}

// function twitter () {
//     console.log("Tweet tweet")
// }
// function spotify (songName) {
//     console.log("Nice Song!")
// }
function movie(movieName) {
    console.log("Cool Movie!")
    var movieUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(movieUrl)
    request(movieUrl, function(err, res, body){
        var movieObject = JSON.parse(res.body)
        console.log(movieObject)
        console.log(`
            Title: ${ movieObject.Title }
            Year: ${ movieObject.Year }
            imdbRating: ${ movieObject.imdbRating }
            Rotten Tomatoes: ${ movieObject.Ratings[1].Value }
            Country Produced: ${ movieObject.Country }
            Language: ${ movieObject.Language }
            Plot: ${ movieObject.Plot }
            Actors: ${ movieObject.Actors }
        `)
    })
}


// function doWhat () {
//     console.log("Liri is my bitch!")
// }

//where would we call these functions? 