// create a digital clock
digitalClock = function() {
    let intervalFn= setInterval(function() {
        d = new Date();
        console.log(d);
     let time=d.toString().split(" ");
     date=time.slice(0, 4);
        document.getElementById("digitaltime").innerHTML=time[4]+"<br>"+date;
       },1000);
}
digitalClock();