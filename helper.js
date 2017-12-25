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
  if (today >= compare) {
    document.getElementById("present").disabled=false
    document.getElementById("present").className="btn btn-lg btn-primary"
    clearTimeout(t); 
    document.getElementById("counter").innerHTML = "It's Christmas!"

  }
  else {
    document.getElementById("counter").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds till Christmas!"
    t = setTimeout(calcTime, 500); 
  }
} 

function showPresent() {
  document.location.href="card.html"
  console.log("Present!")
}


