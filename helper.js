var t; 

function calcTime() {
  var today = new Date(); 
  var christmas = new Date(2017, 11, 25) 
  var diff = christmas - today

  var seconds = Math.floor(diff/1000); 
  var minutes = Math.floor(seconds/60); 
  seconds = seconds % 60; 
  var hours = Math.floor(minutes/60); 
  minutes = minutes % 60; 
  var days = Math.floor(hours/24); 
  hours = hours % 24; 

  var compare = new Date(2017, 11, 25)
  if (today.getFullYear() == compare.getFullYear() && 
    today.getMonth() == compare.getMonth() && 
    today.getDay() == compare.getDay()) {
    document.getElementById("present").disabled=false
    document.getElementById("present").className="btn btn-lg btn-primary"
  }

  document.getElementById("counter").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds till Christmas!"

  t = setTimeout(calcTime, 500); 
} 

function showPresent() {
  clearTimeout(t); 
  console.log("Present!")
}


