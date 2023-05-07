const api_url = "https://official-joke-api.appspot.com/random_joke";
    async function getJoke(){
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        let {type, setup, punchline, id} = data;
        document.getElementById("setup").innerHTML = setup;
        document.getElementById("punchline").innerHTML = punchline;
    }
getJoke();
