// declarations
const root_URL = "https://icanhazdadjoke.com/";
const fetchOptions = {method: "GET", headers: {"Accept": "application/json"}};
let firstUse = true;

const getJokeBtn = document.querySelector("#getJokeButton");
const jokeDisplay = document.querySelector("#jokeDisplay");


// functions
getJokeHandler = async()=>{
    if(firstUse){
        getJokeBtn.textContent = "get another joke!";
        firstUse = false;
    }
    const getJoke = await fetch(root_URL, fetchOptions);
    const getJokeParsed = await getJoke.json();

    jokeDisplay.textContent = getJokeParsed.joke;
    console.log(getJokeParsed);
}

// event listeners
getJokeBtn.addEventListener("click", getJokeHandler);
