const a = document.getElementById('day');
const b = document.getElementById('hour');
const c = document.getElementById('mins');
const d = document.getElementById('seconds');

const newYears = "1 Jan 2022";
function countdown(){
    const newYearsDate = new Date(newYears);
    const CurrentDate = new Date();

    const seconds = (newYearsDate - CurrentDate)/1000;
    const days = Math.floor(seconds /3600 /24); 
    const hours = Math.floor(seconds/3600) % 24;
    const mins =  Math.floor(seconds/60) % 60;
    const second = Math.floor(seconds) % 60;
    
    a.innerHTML = days;
    b.innerHTML = hours;
    c.innerHTML = mins ;
    d.innerHTML = second;
}
countdown();
setInterval(countdown , 1000);


