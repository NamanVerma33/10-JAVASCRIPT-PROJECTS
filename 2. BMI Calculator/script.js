document.querySelector('#bmiForm').addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.querySelector('#gender').value;
    const age = parseInt(document.querySelector('#age').value);
    const heightFeet = parseInt(document.querySelector('#height-feet').value);
    const heightInches = parseInt(document.querySelector('#height-inches').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    if(gender && age && heightFeet && heightInches && weight){
        const heightmeters = ((heightFeet*12) + heightInches) * 0.0254;
        const bmi = weight/(heightmeters*heightmeters);
        const result = document.querySelector('.result');

        let category = '';
        if(bmi<18.5){
            category = 'Under Weight';        
        }
        else if(bmi>=18.5 && bmi<24.9){
            category = 'Normal Weight';
        }
        else if(bmi>=24.9 && bmi<29.9){
            category = 'Over Weight';
        }
        else{
            category = 'Obese';
        }

        result.innerHTML = 'BMI is ' + bmi.toFixed(2) +'<br/>' + 'Category is ' + category;

    }
})