var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds"); 


function displayDate(){
    const date = new Date()
    // console.log(date)
    const hoursString = DateFormate(date.getHours() % 12)
    const minutesString = DateFormate(date.getMinutes())
    const secondsString = DateFormate(date.getSeconds())
    // console.log(hoursString, minutesString, secondsString)

    hours.innerHTML = hoursString
    minutes.innerHTML = minutesString
    seconds.innerHTML = secondsString

}

function DateFormate(date){
    return date  < 10 ? "0" + date : date 

}

setInterval(displayDate,1000)
 