var winner

function buttonPressed() {
    var pressedButtonId = this.id
    if (pressedButtonId == winner) {
        document.getElementById("infoText").innerHTML = "You WIN !!!"
        this.className = "btn btn-success"
    } else {
        document.getElementById("infoText").innerHTML = "Goat behind this door"
        this.className = "btn btn-secondary disabled"
        //this.mouseup = buttonReleased
    }
}

function generateButtons(noBut) {
    var myCol = document.getElementById("buttonsCol")
    var myRow = document.getElementById("buttonsRow")
    document.getElementById("startButton").className = "btn btn-secondary disabled"
    for (let i = 0; i < noBut; ++i) {
        var btn = document.createElement("button")
        var column = document.createElement("div")  
        btn.className = "btn btn-info"
        btn.onclick = buttonPressed
        btn.innerHTML = "Pick ME"
        btn.id = i
        column.className = "col"
        column.appendChild(btn)
        myRow.appendChild(column)
    }
}

function validateInput() {
    var enteredNumber = document.getElementById("numberOfDoors").value
    if (enteredNumber < 2 || enteredNumber > 10) {
        alert("Please give a number between 2 and 10");
    } else {
        var numberOfButtons = enteredNumber
        winner = Math.round(Math.random() * numberOfButtons)
        document.getElementById("infoText").innerHTML = "Please choose a button below!"
        generateButtons(numberOfButtons)
    }
}