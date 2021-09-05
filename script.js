min=document.querySelector(".minute")
sec=document.querySelector(".second")
hr=document.querySelector(".hour")
setInterval(setDate,1000)
setDate()
function setDate(){
    const now= new Date();

    seconds=now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec.style.transform=`rotate(${secondsDegrees}deg)`;


    minutes=now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);
    min.style.transform=`rotate(${minutesDegrees}deg)`;

    hours=now.getHours();
    const hoursDegrees = ((hours / 12) * 360);
    hr.style.transform=`rotate(${hoursDegrees}deg)`;
    
    console.log(hours+" "+ minutes+" "+seconds)
}
   

