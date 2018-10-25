function slideStroke() {
    //control lineWidth
    stroke = document.getElementById("stroke").value;
    $("#slideStroke").text(`Stroke (Max: 100): ${stroke}`);

    let rS = document.getElementById("redS").value;
    let gS = document.getElementById("greenS").value;
    let bS = document.getElementById("blueS").value;
    let aS = document.getElementById("AS").value/100;
    $("#slideRedS").text(`Red (Max: 255): ${rS}`);
    $("#slideGreenS").text(`Green (Max: 255): ${gS}`);
    $("#slideBlueS").text(`Blue (Max: 255): ${bS}`);
    $("#slideAS").text(`Opacity (Max: 100): ${Math.round(aS*100)}`);
    $("#slideFillS").css("background-color", `rgba(${rS}, ${gS}, ${bS}, ${aS})`)
    strokeStyle= `rgba(${rS}, ${gS}, ${bS}, ${aS})`
}