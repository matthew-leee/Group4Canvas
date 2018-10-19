let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
let fill;
let stroke;
let radius;
let clickCount = 0;
let clickArr = [];

$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$('#canvas-draft').mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
});

$('#canvas-draft').mouseleave(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

// controlling some buttons

$("#dropFill").click(function (e) {
    fill = e.target.innerText;
    $("#dropFill").hide();
    return fill;
})

$("#styleFill").click(function () {
    $("#dropFill").css("display", "block")
})

$("#styleStroke").click(function () {
    $("#dropStroke").css("display", "block")
})

$("#slider-range-max").slider({
    range: "max",
    min: 1,
    max: 100,
    orientation: "vertical",
    value: 1,
    slide: function (event, ui) {
        $("#amount").val(ui.value);
        stroke = ui.value;
    }
});

$("slider")
$("#amount").val($("#slider-range-max").slider("value"));




class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyEnter() { }
}

