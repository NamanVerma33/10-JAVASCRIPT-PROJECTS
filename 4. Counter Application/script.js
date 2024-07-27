document.querySelector('#add').addEventListener("click",incrementCounter);
document.querySelector('#sub').addEventListener("click",decrementCounter);
document.querySelector('#reset').addEventListener("click",resetCounter);

let display=document.querySelector('#result');
let displayValue = 0;

function updateCounterValue(){
    display.textContent = displayValue;
}

function incrementCounter(){
    displayValue++;
    updateCounterValue();

}

function decrementCounter(){
    if(displayValue>0){
        displayValue--;
        updateCounterValue();
    }
}

function resetCounter(){
    displayValue=0;
    updateCounterValue();

}
