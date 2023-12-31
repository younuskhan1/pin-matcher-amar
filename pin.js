function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}


let obtainPinString;

function receivedPin() {
    const obtainPin = generatePin();
    obtainPinString = obtainPin.toString();
    if (obtainPinString.length === 4) {
        return obtainPinString;
    } else {
        return receivedPin();
    }
}

document.getElementById("genetate-pin").addEventListener("click", function () {
    const gotPin = receivedPin();
    document.getElementById("generate-pin-input").value = gotPin;
})


const calculatorInputField = document.getElementById("calculator-input-field");

const buttons = document.getElementsByClassName("button");
for (btn of buttons) {
    btn.addEventListener("click", function (event) {
        // get the new number for every click on calculator button
        const newNumber = event.target.innerText;
        // get the previous existed numbers at  calculator screen 
        const pastNumbrs = calculatorInputField.value;
        if (newNumber === "C") {
            calculatorInputField.value = "";
        } else if (newNumber === "<") {
            const leftNumbers = pastNumbrs.slice(0, -1);
            calculatorInputField.value = leftNumbers;
        }
        else {
            calculatorInputField.value = pastNumbrs + newNumber;
        }
    })
}



document.getElementById("button-submit").addEventListener("click", function () {
    const typedPinInCalculator = calculatorInputField.value;

    const failureMessage = document.getElementById("failure-message");
    const successMessage = document.getElementById("success-message");

    if (typedPinInCalculator === obtainPinString) {
        successMessage.style.display = "block";
        failureMessage.style.display = "none";
    } else {
        failureMessage.style.display = "block";
        successMessage.style.display = "none";
    }
})