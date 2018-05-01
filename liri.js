require("dotenv").config();

var input1 = process.argv[2]

if (input1 === 'my-tweets') {
//call the function here
    console.log("you chose my-tweets")
} else if (input1 === "spotify-this-song") {
    //call the function here
    console.log("you chose spotify-this-song")
} else if (input1 === "movie-this") {
    //call the function here
    console.log("you chose movie-this") 
} else if (input1 === "do-what-it-says") {
    //call the function here
    console.log("you chose do-what-it-says")
} else {
    console.log("please re-enter your option")
}

// write twitter function 
// write spotiyf function
// write OMDB function
// do what is says points to random.txt (whatever the text doc says)