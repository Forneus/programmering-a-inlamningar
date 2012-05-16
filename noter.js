"use strict"
var draw = startCanvas("maincanvas");

function notstreck(ypos) {
    draw.raw().moveTo(700, ypos);
    draw.raw().lineTo(100, ypos);
    // draw.raw().stroke();
};

draw.setCurColor("black");
draw.raw().beginPath();
draw.raw().lineWidth = 2;
for (var i=100; i < 201; i += 25) {
    notstreck(i);
}
for (var i=300; i < 401; i += 25) {
    notstreck(i);
}
// Utan denna extra stroke blir linjen grå och inte svart - knepigt!
draw.raw().closePath();
draw.raw().stroke();

// fill color också?
/*
var lines = [];

lines [0] =
lines [1] =
lines [2] =
lines [3] =
lines [4] =
lines [5] =
lines [6] =
lines [7] =
lines [8] =
lines [9] =

draw.raw().moveTo(700, 100);
draw.raw().lineTo(100, 100);
draw.raw().stroke();

draw.raw().moveTo(700, 125);
draw.raw().lineTo(100, 125);
draw.raw().stroke();

draw.raw().moveTo(700, 150);
draw.raw().lineTo(100, 150);
draw.raw().stroke();

draw.raw().moveTo(700, 175);
draw.raw().lineTo(100, 175);
draw.raw().stroke();

draw.raw().moveTo(700, 200);
draw.raw().lineTo(100, 200);
draw.raw().stroke();
*/


// beginPath?

// \u2669

draw.text("\u1D11E", 150, 100, "#000", 80);

draw.text("\u2669", 200, 195, "#000", 80);
draw.text("\u2669", 300, 170, "#000", 80);


// object.onkeypress=



// Försökt hitta lösningar på att avgöra vilken knapp som trycks för att kunna utföra en funktion, men hittils inte hittat någon lösning. Koden som följer är test på ifall det funkar.


/*
function drawnote(e){
var evtobj=window.event? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
var actualkey=String.fromCharCode(unicode)
if (actualkey=="a")
draw.text("\u2669", 300, 170, "#000", 80);
if (actualkey=="z")
document.body.style.fontSize="100%"
}
document.onkeypress=drawnote

/*





// Här är en hittils irrelevant del av programmet, som jag jobbar med när jag kommer till steget att manuellt kunna välja vad för slags not som skall skrivas ut.

/*  document.getElementById("Helnot").onclick = function () {
      draw.text("\u2669", 400, 170, "#000", 80);
}
document.getElementById("Halvnot").onclick = function () {
    draw.text("\u2669", 400, 170, "#000", 80);
}
document.getElementById("Fjärdedelsnot").onclick = function () {
    draw.text("\u2669", 400, 170, "#000", 80);
}
document.getElementById("Åttondelsnot").onclick = function () {
    draw.text("\u2669", 400, 170, "#000", 80);
}
*/



// TODO NOTE: +/- 25 pixlar för noter, precis som notstrecken
// TODO:Remember to check for unicode-symbols
// quarternote: hexadecimal: u2669      G clef: (U+1D11E)
