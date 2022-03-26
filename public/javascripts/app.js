const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity, // Number: The max delay before we try to reconnect.
        min: 500, // Number: The minimum delay before we try reconnect.
        retries: 100 // Number: How many times we should try to reconnect.
    }
});

document.querySelector(".update__form").addEventListener("submit", e => {
    console.log("Er is geklikt.");

    e.preventDefault();

    let select = document.querySelector(".select__character");
    let character = select.options[select.selectedIndex].value;
    let score = document.querySelector(".score__input").value;

    console.log(character);
    console.log(score);

    primus.write({
        charactername: character,
        score: score
    }); 
}); 