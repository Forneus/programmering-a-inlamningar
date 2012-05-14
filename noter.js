"use strict"
var draw = startCanvas("maincanvas");

function notstreck(ypos) {
    draw.raw().moveTo(700, ypos);
    draw.raw().lineTo(100, ypos);
    // draw.raw().stroke();
};

// draw.setCurColor("black");
draw.raw().beginPath();
draw.raw().lineWidth = 2;
for (var i=100; i < 201; i += 25) {
    notstreck(i);
}
for (var i=300; i < 401; i += 25) {
    notstreck(i);
}
// Utan denna extra stroke blir linjen grå och inte svart - knepigt!
//draw.raw().closePath();
draw.raw().stroke();
// draw.raw().stroke();

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
// \u1D15D = full
// \u1D15E = half
// \u1D15F = quarter
// \u1D160 = eigth

// Eller

// \u2669 = 1/4
// \u266A = 1/8

var set = 209, space = 60
for ( i = 0; i < 9; i += 1 ) {
    draw.text("\u2669", i*space + 100, set - 12.5 * i, "#000", 130);
}
set = 409;
for ( i = 0; i < 9; i += 1 ) {
    draw.text("\u266A", i*space + 100, set - 12.5 * i, "#000", 130);
}



// TODO:Remember to check for unicode-symbols
// quarternote: hexadecimal: u2669      G clef: (U+1D11E)
