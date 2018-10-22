function slide() {
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;
    $("#slideRed").text(`Red (Max: 255): ${r}`);
    $("#slideGreen").text(`Green (Max: 255): ${g}`);
    $("#slideBlue").text(`Blue (Max: 255): ${b}`);
    $("#slideFill").css("background-color", `rgb(${r}, ${g}, ${b})`)
    fill = `rgb(${r}, ${g}, ${b})`
}