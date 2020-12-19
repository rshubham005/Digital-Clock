var settime= function()
{
var ele = document.getElementById("time")
var currentTime = new Date()
var hour = currentTime.getHours()
var min =  currentTime.getMinutes()
var sec = currentTime.getSeconds()
var merdian = "PM";
if(hour>=0 && hour<12)
{
    merdian="AM"
    ele.innerHTML = hour+":"+min+":"+sec+" "+merdian;
}
else if(hour>=12 && hour<=23)
{
 merdian="PM"
 if(hour>12)
 {
 ele.innerHTML = Number(hour-12)+":"+min+":"+sec+" "+merdian;
 }
}
var img = document.getElementById("img")
if(hour>=4 && hour<12)
{
    img.src="images/goodmorning.jpg"
}
else if(hour>=12 && hour<16)
{
  img.src ="images/goodafternoon.jpg"   
}
else if( hour>=16 || hour<20)
{
    img.src="images/evening.jpg"
}
else if(hour>=20 || hour<4)
{
    img.src="images.goonight.jpg"
}
}