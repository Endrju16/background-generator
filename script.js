var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setColor(){
    body.style.setProperty("background", "linear-gradient(to right, " + color1.value + ", " + color2.value);
    css.textContent = body.style.background + ";";
}

// function to pick random number/ color hashtag
function getRandom() {
    var letters = "0123456789ABCDEF";
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandom() {
    color1.value = getRandom();
    color2.value = getRandom();
    btn.value = getRandom()
    btn.style.background = btn.value;
    setColor();
}

//if in HTML we use "oninput=setColor()" in "input" tags we can remove addListeners but it's better to write it like this (separation of concerns)

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
btn.addEventListener("click", setRandom);

setColor();