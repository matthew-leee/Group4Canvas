let layerClickCount = 0;
let zDraft;
let canvasArr = [1];
let canvasReal = document.getElementById(`canvas-${canvasArr[0]}`)

$("#sortable").sortable();
$("#sortable").disableSelection();
$(".layerTitle").on("click", () => {

    //raise z-index of canvas-draft
    zDraft = parseInt($("#canvas-draft").css("z-index")) + 1;
    $("#canvas-draft").css("z-index", `${zDraft}`)
    //create new layer
    let liLeng = $("#sortable li").length;
    $("#sortable li:nth-child(1)").before(`<li class="ui-state-default ui-sortable-handle" id="${liLeng + 1}">Layer ${liLeng + 1}</li>`)
    $("#canvas-draft").after(`<canvas id="canvas-${liLeng + 1}" width="600px" height="600px">Bad</canvas>`);
    //assign new layer as canvasReal
    canvasReal = document.getElementById(`canvas-${liLeng + 1}`);
    canvasArr.length = 0;
    canvasArr.push(liLeng+1);
    $("#sortable li").css("background-color", "aquamarine");
    //new layer should be placed below canvasDraft
    $(`#canvas-${liLeng + 1}`).css({
        zIndex: zDraft - 1,
    });
    $("#sortable li:nth-child(1)").css({
        backgroundColor: "rgb(221, 108, 106)",
    })
    $(`#canvas-${liLeng + 1}`).css("z-index")
    layerClickCount++;
})


//when clicked, CanvasReal is reassigned
$("ul").on("mousedown", function (e) {
    layerClickCount++;
    canvasArr.length = 0;
    canvasArr.push(e.target.id);
    canvasReal = document.getElementById(`canvas-${e.target.id}`);

    if (e.target.id !== "sortable") {
        if (layerClickCount == 1) {
            $(e.target).css("background-color", "rgb(221, 108, 106)");
        } else if (layerClickCount > 1) {
            $("#sortable li").css("background-color", "aquamarine");
            $(e.target).css("background-color", "rgb(221, 108, 106)");
        }
    }
})

$("#sortable").on("mouseup", function (e) {
    console.log("mouseup")
    zDraft = parseInt($("#canvas-draft").css("z-index"));
    let j = $("#sortable li").length;
    let h = $("#sortable li");
    console.log(h[0]);
    setTimeout(() => {
        console.log(h[0]);
        for (let i = 0; i < j; i++) {
            let id = $(`#sortable li:nth-child(${i + 1})`).attr("id");
            console.log(id)
            $(`#canvas-${id}`).css("z-index", `${zDraft - (i + 1)}`)
        }
    }, 100)
    return canvasReal;
})



