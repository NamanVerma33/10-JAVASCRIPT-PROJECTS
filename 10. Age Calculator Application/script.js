// document.querySelector('#result').addEventListener("onclick",calculateAge);

function calculateAge(){
    const today = new Date();
    const birthInput = document.querySelector("#birthdate").value;
    const birthParts = birthInput.split('-');
    const birthDay = birthParts[0];
    const birthMonth = birthParts[1] -1;
    const birthYear = birthParts[2];
    const birthDate = new Date(birthYear,birthMonth,birthDay);

    // console.log(birthInput);
    // console.log(birthParts);
    // console.log(birthDay);
    // console.log(birthMonth);
    // console.log(birthYear);



    const isValidDate = (date) => {
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    }


    if(!isValidDate(birthDate)){
        alert('Invalid Date Format...Please Enter the Valid Format DD-MM--YYYY');
        return ;
    }


    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDay = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDay/7);
    const ageInMonths = Math.floor(ageInDay/30.436875);
    const ageInYears = Math.floor(ageInDay/365.25);
    
    
    const result = document.querySelector('.result-item');

    result.innerHTML = 
    `<div>
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths%12} Months ${ageInDay%30} Days</p>
    </div>
    <div>
            <h3>Months Passed:</h3>
            <p>${ageInMonths}</p>
    </div>
     <div>
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
    </div>
     <div>
            <h3>Days Passed:</h3>
            <p>${ageInDay}</p>
    </div>
     <div>
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
    </div>
     <div>
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
    </div>
     <div>
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
    </div>

    `


}
