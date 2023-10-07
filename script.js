var winner

function buttonPressed() {
    var pressedButtonId = this.id
    if (pressedButtonId == winner) {
        document.getElementById("infoText").innerHTML = "You WIN !!!"
        this.className = "btn btn-success"
    } else {
        document.getElementById("infoText").innerHTML = "Goat behind this door"
        this.className = "btn btn-secondary disabled"
    }
}

function generateButtons(noBut) {
    document.getElementById("startButton").className = "btn btn-secondary disabled"
    for (let i = 0; i < noBut; ++i) {
        var btn = document.createElement("button")
        var column = document.createElement("div")
        var centerB = document.createElement("div")
        btn.className = "btn btn-info"
        btn.onclick = buttonPressed
        btn.innerHTML = "Pick ME"
        btn.id = i
        column.className = "col"
        centerB.className = "text-center"
        centerB.appendChild(btn)
        column.appendChild(centerB)
        document.getElementById("buttonsRow").appendChild(column)
    }
}

function validateInput() {
    var enteredNumber = document.getElementById("numberOfButtons").value
    if (enteredNumber < 2 || enteredNumber > 10) {
        alert("Please give a number between 2 and 10");
    } else {
        winner = Math.round(Math.random() * (enteredNumber - 1))
        document.getElementById("infoText").innerHTML = "Please choose a button below!"
        generateButtons(enteredNumber)
    }
}