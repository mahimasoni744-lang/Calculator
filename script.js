let display = document.getElementById("display");


// Number / Operator add karna
function addValue(value) {

    if (display.innerText === "0") {
        display.innerText = value;
    }
    else {
        display.innerText += value;
    }
}


// AC button
function clearDisplay() {

    display.innerText = "0";
}


// DEL button
function deleteNumber() {

    let value = display.innerText;

    if (value.length === 1) {
        display.innerText = "0";
    }
    else {
        display.innerText = value.slice(0, -1);
    }
}


// Equal button
function calculate() {

    try {

        let result = eval(display.innerText);

        display.innerText = result;

    }
    catch {

        display.innerText = "Error";

    }
}
