$("#fillPanel, #fillTopPanel").on("click", () => {
    $(".fill, .styleTopPanel").css("display", "flex");
    $(".stylePanel, .stroke").css("display", "none");
})

$("#strokePanel, #strokeTopPanel").on("click", () => {
    $(".stroke, .styleTopPanel").css("display", "flex");
    $(".stylePanel, .fill").css("display", "none");

})

$(".style").on("mouseleave", ()=>{
    $(".fill, .stroke, .styleTopPanel").css("display", "none");
    $(".stylePanel").css("display", "flex");
})