let inputValueOne = document.getElementById("inputOne").value;
let inputValueTwo = document.getElementById("inputTwo").value;
let displayError = document.getElementById("errorMessage");
if (inputValueOne == "" && inputValueTwo == "") {
    displayError.innerHTML = "Please enter a value";
}
setTimeout(function () {
    document.getElementById("errorMessage").innerHTML = "";
}, 5000);

// convert input one
function convertInputOne() {
    let inputValueOne = document.getElementById("inputOne").value;
    let inputValueTwo = document.getElementById("inputTwo").value;
    let selectedUnitOne = document.getElementById("unitOne").value;
    let selectedUnitTwo = document.getElementById("unitTwo").value;
    let displayError = document.getElementById("errorMessage");

    if (selectedUnitOne == selectedUnitTwo) {
        displayError.innerHTML = "Please select different measurement";
    } else if (inputValueOne == "" && inputValueTwo == "") {
        displayError.innerHTML = "Please enter a value";
    } else if (
        (selectedUnitOne == "second" && selectedUnitTwo == "minute") ||
        (selectedUnitOne == "minute" && selectedUnitTwo == "hour")
    ) {
        document.getElementById("inputTwo").value = inputValueOne / 60;
    } else if (selectedUnitOne == "second" && selectedUnitTwo == "hour") {
        document.getElementById("inputTwo").value = inputValueOne / 3600;
    } else if (
        (selectedUnitOne == "minute" && selectedUnitTwo == "second") ||
        (selectedUnitOne == "hour" && selectedUnitTwo == "minute")
    ) {
        document.getElementById("inputTwo").value = inputValueOne * 60;
    } else if (selectedUnitOne == "hour" && selectedUnitTwo == "second") {
        document.getElementById("inputTwo").value = inputValueOne * 3600;
    }

    setTimeout(function () {
        document.getElementById("errorMessage").innerHTML = "";
    }, 3000);
}
// convert input two
function convertInputTwo() {
    let inputValueOne = document.getElementById("inputOne").value;
    let inputValueTwo = document.getElementById("inputTwo").value;
    let selectedUnitOne = document.getElementById("unitOne").value;
    let selectedUnitTwo = document.getElementById("unitTwo").value;
    let displayError = document.getElementById("errorMessage");

    if (selectedUnitOne == selectedUnitTwo) {
        displayError.innerHTML = "Please select different measurement";
    } else if (inputValueOne == "" && inputValueTwo == "") {
        displayError.innerHTML = "Please enter a value";
    } else if (
        (selectedUnitTwo == "second" && selectedUnitOne == "minute") ||
        (selectedUnitTwo == "minute" && selectedUnitOne == "hour")
    ) {
        document.getElementById("inputOne").value = inputValueTwo / 60;
    } else if (selectedUnitTwo == "second" && selectedUnitOne == "hour") {
        document.getElementById("inputOne").value = inputValueTwo / 3600;
    } else if (
        (selectedUnitTwo == "minute" && selectedUnitOne == "second") ||
        (selectedUnitTwo == "hour" && selectedUnitOne == "minute")
    ) {
        document.getElementById("inputOne").value = inputValueTwo * 60;
    } else if (selectedUnitTwo == "hour" && selectedUnitOne == "second") {
        document.getElementById("inputOne").value = inputValueTwo * 3600;
    }
    setTimeout(function () {
        document.getElementById("errorMessage").innerHTML = "";
    }, 3000);
}
