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

function fixedFromCharCode(codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
}

var fullnote  = fixedFromCharCode(0x1D15D);
var halfnote  = fixedFromCharCode(0x1D15E);
var quartnote = fixedFromCharCode(0x1D15F);
var eigthnote = fixedFromCharCode(0x1D160);
var gclef     = fixedFromCharCode(0x1D11E);





// beginPath?

// \u2669




// object.onkeypress=



// Försökt hitta lösningar på att avgöra vilken knapp som trycks för att kunna utföra en funktion, men hittils inte hittat någon lösning. Koden som följer är test på ifall det funkar.



/* function drawnote(e){
var unicode = e.keyCode;
var actualkey=String.fromCharCode(unicode)
if (actualkey=="a")
draw.text("\u2669", 300, 170, "#000", 80);
if (actualkey=="z")
} */

//document.body.style.fontSize="100%"




// document.onkeydown=drawnote


draw.setCurFont("Code2001");

var set = 202, space = 58, startleft = 175, fontsize = 130;
draw.text(gclef, 100, set-5, "#000", fontsize);
for ( i = 0; i < 9; i += 1 ) {
    draw.text(halfnote, i*space + startleft, set - 12.5 * i, "#000", fontsize);
    // i*space = avstånd mellan noter + indrag från kanten
    // set är y-koordinat för placering på nedersta notlinjen
    // 12.5*i är ett steg upp (25 pixlar mellan linjerna)
}
set = 402;
draw.text(gclef, 100, set-5, "#000", fontsize);
for ( i = 0; i < 9; i += 1 ) {
    draw.text(eigthnote, i*space + startleft, set - 12.5 * i, "#000", fontsize);
}



// Här är en hittils irrelevant del av programmet, som jag jobbar med när jag kommer till steget att manuellt kunna välja vad för slags not som skall skrivas ut.

  document.getElementById("Helnot").onclick = function () {
      draw.text(fullnote, 400, 170, "#000", 130);
}
document.getElementById("Halvnot").onclick = function () {
    draw.text(halfnote, 400, 170, "#000", 130);
}
document.getElementById("Fjärdedelsnot").onclick = function () {
    draw.text(quartnote, 400, 170, "#000", 130);
}
document.getElementById("Åttondelsnot").onclick = function () {
    draw.text(eigthnote, 400, 170, "#000", 130);
}




// TODO NOTE: +/- 25 pixlar för noter, precis som notstrecken
// TODO:Remember to check for unicode-symbols
// quarternote: hexadecimal: u2669      G clef: (U+1D11E)
