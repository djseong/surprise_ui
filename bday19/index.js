var t; 

function calcTime() {
  var today = new Date(); 
  var endDate = new Date(2019, 6, 19) 
  var diff = endDate - today
  var seconds = Math.floor(diff/1000); 
  var minutes = Math.floor(seconds/60); 
  seconds = seconds % 60; 
  var hours = Math.floor(minutes/60); 
  minutes = minutes % 60; 
  var days = Math.floor(hours/24); 
  hours = hours % 24; 

  if (today >= endDate) {
    console.log('hi');
    document.getElementById("present").disabled=false
    document.getElementById("present").className="btn btn-square btn-lg btn-filled-blue child"
    clearTimeout(t); 
    document.getElementById("counter").innerHTML = "It's your birthday!"

  }
  else {
    document.getElementById("counter").innerHTML = hours + " hours, " + minutes + " minutes, " + seconds + " seconds till your Birthday!"
    t = setTimeout(calcTime, 500); 
  }
} 

function showPresent() {
  document.location.href="card.html"
  console.log("Present!")
}


