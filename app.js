function countdwon(){
    const countDate = new Date("novembar 20, 2022, 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    // how fuck this time work

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour *24;

    // calculate the time
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour)/ minute);
    const textSecond = Math.floor((gap % minute)/ second);
    
    document.getElementById("day-text").innerText = textDay;
    document.getElementById("hour-text").innerText = textHour;
    document.getElementById("minute-text").innerText = textMinute;
    document.getElementById("second-text").innerText = textSecond;

    // console.log(textDay,textHour,textMinute,textSecond)

}

setInterval(countdwon,1000)