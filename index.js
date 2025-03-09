const display = document.getElementById("display");
const MAX_INPUT_LENGTH = 10;
function appendToDisplay(input){
    if (display.value.length >= MAX_INPUT_LENGTH) return;
    
    const currentValue = display.value;
    const lastChar = currentValue.slice(-1);
    
    if (["+", "-", "*", "/"].includes(input)) {
        if (["+", "-", "*", "/"].includes(lastChar)) return;
        if (currentValue === "") return;
    }
    
    if (input === ".") {
        const currentNumber = currentValue.split(/[\+\-\*\/]/).pop();
        if (currentNumber.includes(".")) return;
    }
    
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
    
}