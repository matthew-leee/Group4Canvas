<<<<<<< HEAD
//Redo & Undo
var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasReal.toDataURL());
    document.title = cStep + ":" + cPushArray.length;
}

function cUndo() {
    if (cStep >= 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
        clickCount = 0;
    }
}
function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
        clickCount = 0;
    }
=======
//Redo & Undo
var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasReal.toDataURL());
    document.title = cStep + ":" + cPushArray.length;
}

function cUndo() {
    if (cStep >= 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
    }
}
function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
    }
>>>>>>> 09a0c4ad2cfb38e2f1c55e0221529a74f0393508
}