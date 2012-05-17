"use strict"
var draw = startCanvas("maincanvas");

function notstreck(ypos) {
    draw.raw().moveTo(700, ypos);
    draw.raw().lineTo(100, ypos);
    // draw.raw().stroke();
};

draw.raw().beginPath();
draw.raw().lineWidth = 2;
for (var i=100; i < 201; i += 25) {
    notstreck(i);
}
for (var i=300; i < 401; i += 25) {
    notstreck(i);
}
draw.raw().stroke();

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

// Alternative chars
// \u2669 = 1/4
// \u266A = 1/8

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

