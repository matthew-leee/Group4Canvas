function slideBg() {
    let rC = document.getElementById("redC").value;
    let gC = document.getElementById("greenC").value;
    let bC = document.getElementById("blueC").value;
    $("#slideRedC").text(`Red (Max: 255): ${rC}`);
    $("#slideGreenC").text(`Green (Max: 255): ${gC}`);
    $("#slideBlueC").text(`Blue (Max: 255): ${bC}`);
    $("#slideBgC").css("background-color", `rgba(${rC}, ${gC}, ${bC}, 1)`)
    bgColor= `rgba(${rC}, ${gC}, ${bC}, 1)`
}