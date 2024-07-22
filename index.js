// Calculator Program

const display = document.getElementById('display');

function addDisplay(input){
    display.value = display.value + input;
}

function clearDisplay(){
    display.value = '';
}

function backspace(){
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function percentage(){
    let currentValue = display.value;
    display.value = eval(currentValue) / 100;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = 'Error';
    }
}