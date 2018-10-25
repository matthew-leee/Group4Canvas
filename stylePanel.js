$("#fillPanel, #fillTopPanel").on("click", () => {
    $(".fill, .styleTopPanel").css("display", "flex");
    $(".stylePanel, .stroke, .image").css("display", "none");
})

$("#strokePanel, #strokeTopPanel").on("click", () => {
    $(".stroke, .styleTopPanel").css("display", "flex");
    $(".stylePanel, .fill, .image").css("display", "none");

})

$(".stylePanel2").on("click", () => {
    $(".image, .stylePanel").css("display", "flex");
    $(".stylePanel2, .fill, .stroke").css("display", "none");
})

$(".style").on("mouseleave", ()=>{
    $(".fill, .stroke, .styleTopPanel, .image").css("display", "none");
    $(".stylePanel, .stylePanel2").css("display", "flex");
})