const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity, // Number: The max delay before we try to reconnect.
        min: 500, // Number: The minimum delay before we try reconnect.
        retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on("data", data => {
    console.log("Joepie, er is data!");
    console.log(data);

    let character = data.charactername;
    let score = data.score;

    console.log(character);
    console.log(score)

    let td = document.querySelector("td");
}); 