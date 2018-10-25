function slide() {
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;
    let a = document.getElementById("A").value/100;
    $("#slideRed").text(`Red (Max: 255): ${r}`);
    $("#slideGreen").text(`Green (Max: 255): ${g}`);
    $("#slideBlue").text(`Blue (Max: 255): ${b}`);
    $("#slideA").text(`Opacity (Max: 100): ${Math.round(a*100)}`);
    $("#slideFill").css("background-color", `rgba(${r}, ${g}, ${b}, ${a})`)
    fill = `rgba(${r}, ${g}, ${b}, ${a})`
}