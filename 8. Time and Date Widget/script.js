let dateContainer = document.querySelector('.date-container')
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');
let secondsContainer = document.querySelector('.second');

const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
function formattime(time){
    return time<10? '0' + time: time; 
}

function updatetime(){
    const today = new Date();
    // console.log(today);

    let day = weekdays[today.getDay()];
    // console.log(day);
    let date = today.getDate();
    // console.log(date);
    let month = months[today.getMonth()];
    // console.log(month);

    let hours = formattime(today.getHours());
    let minutes = formattime(today.getMinutes());
    let seconds = formattime(today.getSeconds());

    hoursContainer.textContent = hours + ':';
    minutesContainer.textContent = minutes + ':';
    secondsContainer.textContent = seconds 
    dateContainer.innerHTML=` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`
}
// updatetime();

setInterval(updatetime,1000);