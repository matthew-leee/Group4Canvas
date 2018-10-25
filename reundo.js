//Redo & Undo
var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasReal.toDataURL());
}

function cUndo() {
    if (cStep >= 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
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
        clickCount = 0;
    }
}