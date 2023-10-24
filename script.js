var winner;

function generateOutput(message, buttonType, id) {
    document.getElementById("infoText").innerHTML = message;
    document.getElementById("Button_" + id).className = buttonType;
}

function buttonPressed(pressedButtonId) {
    if (pressedButtonId == winner) {
        generateOutput("You WIN !!!", "btn btn-success", pressedButtonId);
    } else {
        generateOutput("Goat behind this door", "btn btn-secondary disabled", pressedButtonId);
    }
}

function generateButtons(noBut) {
    document.getElementById("startButton").className = "btn btn-secondary disabled";
    for (let i = 0; i < noBut; ++i) {
        var btn = document.createElement("button");
        var column = document.createElement("div");
        var centerB = document.createElement("div");
        btn.className = "btn btn-info";
        btn.innerHTML = "Pick ME";
        btn.id = "Button_" + i;
        btn.onclick = function() {
            buttonPressed(i);
        };
        column.className = "col";
        centerB.className = "text-center";
        centerB.appendChild(btn);
        column.appendChild(centerB);
        document.getElementById("buttonsRow").appendChild(column);
    }
}

function validateInput() {
    var enteredNumber = document.getElementById("numberOfButtons").value;
    if (enteredNumber < 2 || enteredNumber > 10) {
        alert("Please give a number between 2 and 10");
    } else {
        winner = Math.round(Math.random() * (enteredNumber - 1));
        document.getElementById("infoText").innerHTML = "Please choose a button below!";
        generateButtons(enteredNumber);
    }
}
