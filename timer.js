// Set the date we're counting down to ..date of opening
var countDownDate = new Date("Apr 11, 2025 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get the date and time
  var now = new Date().getTime();

  // Find the difference between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="Drops"
  document.getElementById("drops").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //Mid hero image placed reflection - small text [with more time i will put these as reflection in sunglasses]
  document.getElementById("droptop").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("drops").innerHTML = "2026 Tickets avaliable May 2025";

  }
}, 1000);