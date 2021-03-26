let now = moment().format('MMMM Do YYYY, h:mm:ss a');
let dotw = moment().format('dddd');
let displayday = $('#dayName');


function displayTime() {
    let now = moment().format("MMM Do, YYYY h:mm:ss a");
    $("#currentDay").text(now);
    displayday.text(dotw);
    
}
setInterval (displayTime, 1000);


let timeBlockEls = [
    { AM9:  "09:00"},
    { AM10: "10:00"},
    { AM11: "11:00"},
    { PM12: "12:00"},
    { PM1:  "01:00"},
    { PM2:  "02:00"},
    { PM3:  "03:00"},
    { PM4:  "04:00"},
    { PM5:  "05:00"}
]

for (var i = 0; i < timeBlockEls.length; i++) {
    function colorChange() {
      if (timeBlockEls<moment().hour())  {
          $(timeBlockEls).addclass('.future')
    
        } else (timeBlockEls>moment().hour()) 
            $(timeBlockEls).addclass('.past');

        }
    
    }

    var calendar = document.querySelector("#AM9").value;
    
    function rendercalendar() {
        var calendartxt = localStorage.getItem("calendar");
    
}

