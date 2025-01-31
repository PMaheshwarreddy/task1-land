//  javascript for landing page
//https://github.com/PMaheshwarreddy/task1-land/blob/main/u.js#L18C1
var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();
 //   var y= getInterval(function);
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
//while(n<0){
  //document.getElementById("demo").innerHTML="EXPRIED";
//}
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
