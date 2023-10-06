function generateButtons(noBut) {
    var myCol = document.getElementById("buttonsCol")
    var myRow = document.getElementById("buttonsRow")
    for (let i = 0; i < noBut; ++i) {
        var btn = document.createElement("button")
        var column = document.createElement("col")  
        btn.className = "btn btn-info"
        btn.innerHTML = "Pick ME"
        column.append(btn)
        myRow.appendChild(column)
    }
}

function validateInput() {
    var enteredNumber = document.getElementById("numberOfDoors").value
    if (enteredNumber < 2 || enteredNumber > 10) {
        alert("Please give a number between 2 and 10");
    } else {
        var numberOfDoors = enteredNumber
        var winner = Math.round(Math.random() * (numberOfDoors - 2) + 2)
        document.getElementById("infoText").innerHTML = "Please choose a button below!"
        generateButtons(numberOfDoors)
    }
    document.getElementById("textDeProba").innerHTML = winner
}