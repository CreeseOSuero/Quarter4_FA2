function generateTable() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);

    if (start < 2 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    let output = "";

    for (let i = 1; i <= start; i++) {
        output += "<div class='row'>";
        for (let j = 1; j <= end; j++) {
            output += '<div class="cell">' + (i * j) + '</div>';
        }
        output += "</div>";
    }

    document.getElementById("table").innerHTML = output;
}
