let timerElem = $('#timer');

function Timer() {
    let seconds = 55;
    let minutes = 59; 
    let hours = 0;

    let secInterval = setInterval(function() {
        if(seconds < 60) {

            timerElem.text(hours + ':' + minutes + '.' + seconds);
            console.log(hours + ':' + minutes + '.' + seconds);
            seconds++;
        }
        
        if(seconds == 60) {
                seconds=0;
                minutes++;
        }
        
        if(minutes == 60) {
                minutes=0;
                hours++;
        }
    }, 1000); 
}
$('#start-btn').click(Timer);