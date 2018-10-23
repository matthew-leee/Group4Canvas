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

$('body').mousedown(function (e) {
    if (e.offsetX > canvasReal.width || e.offsetY > canvasReal.height) {
    currentFunction.onMouseDownWithoutCanvas() }
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
    if (cPushArray[cStep] != canvasReal.toDataURL()) {
        cPush();
    }
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

$('body').keydown(function (e) {
    dragging = false;
    console.log(e.which);
    let keypressed = e.which;
    currentFunction.onKeyEnter(keypressed, e);
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

// document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     var isEscape = false;
//     if ("key" in evt) {
//         isEscape = (evt.key == "Escape" || evt.key == "Esc");
//     } else {
//         isEscape = (evt.keyCode == 27);
//     }
//     if (isEscape) {
//         var escPress = true;
//         alert(escPress);
//         escPress = false;
//     }
// };




class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyEnter() { } //new add
    onMouseDownWithoutCanvas() { } //new add
}

