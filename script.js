let timerElem = $('#timer');
let startBtn = $('#start-btn');
let stopBtn = $('#stop-btn');   
let resetBtn = $('#reset-btn');

function Timer() {
    let seconds = 1; // Default value is 1
    let minutes = 0; 
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

    $('#stop-btn').click(function() {
        clearInterval(secInterval);
    });

    $('#reset-btn').click(function() {
        clearInterval(secInterval);
        hours = 0;
        minutes = 0;
        seconds = 0;
        timerElem.text('0:0.0');
    });
}
$('#start-btn').click(Timer);