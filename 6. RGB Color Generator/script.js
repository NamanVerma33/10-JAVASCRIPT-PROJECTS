const redSlider= document.querySelector('#redSlider');
const greenSlider= document.querySelector('#greenSlider');
const blueSlider= document.querySelector('#blueSlider');

const redValueSpan = document.querySelector('#redValue');
const greenValueSpan = document.querySelector('#greenValue');
const blueValueSpan = document.querySelector('#blueValue');

const color = document.querySelector('.color');
const copyValue = document.querySelector('#copy-btn');
const input = document.querySelector('.inputType');

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyValue.addEventListener('click',copyrgbValue);

function updateColor(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgb_color = `rgb(${redValue},${greenValue},${blueValue})`;

    color.style.backgroundColor = rgb_color;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    input.textContent = rgb_color;
}

function copyrgbValue(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const rgb_color = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgb_color)
    .then(()=>{
        alert("RGB color is copied to clipboard "+ rgb_color);
    })
    .catch((error)=>{
        console.error("Failed to copy RGB values",error);
    });
    }
