const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit&type=single";

async function getJoke()
{
    const response = await fetch(apiUrl);
    var data = await response.json();
    const joke = data.joke;
    console.log(joke);
    console.log(data);
}

getJoke();