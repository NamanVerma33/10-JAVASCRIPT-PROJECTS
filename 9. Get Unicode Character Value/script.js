function detectChar(){

    const input = document.querySelector('.input').value;
    if(input){
        const unicodeValue = input.charCodeAt(0);
        const result = `The Unicode Value of "${input}" is ${unicodeValue}`;
        document.querySelector('.result').textContent = result;

    }
    else{
        document.querySelector('.result').textContent = 'Please Enter a Character';
    }

}