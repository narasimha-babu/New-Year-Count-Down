const newYearDate = "28 Jul 2022";

document.getElementsByClassName("input-date")[0].textContent = "Entered Date is : " + newYearDate ;


function countDown () {

    
    const newDate = new Date(newYearDate);
    const currentDate = new Date();
    const totalSeconds =  Math.floor(newDate - currentDate) / 1000;
    const Days = Math.floor(totalSeconds / 3600 / 24);
    const Hours = Math.floor(totalSeconds / 3600) % 24;
    const Minutes = Math.floor(totalSeconds / 60) % 60;
    const Seconds = Math.floor(totalSeconds) % 60;
    
    const arr = [Days, Hours, Minutes, Seconds];

    for( i=0; i<4; i++){
        
        document.querySelectorAll(".time")[i].innerHTML = arr[i];
    }
    
}

countDown();

setInterval(countDown, 1000);
