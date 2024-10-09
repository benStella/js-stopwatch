var timer = $('#timer');

function Timer() {
    var seconds = 55;

        let secInterval = setInterval(function() {
            if(seconds < 60) {

                timer.text(seconds);
                console.log(seconds);
                seconds++;
            }
            else if(seconds >= 60) {
                    clearInterval(secInterval);
                    seconds=0;
            }
        }, 1000);


    //     // setInterval(function() {
    //     //     timer.text(seconds);
    //     //     console.log(seconds);
    //     //     seconds++;
    //     // }, 1000);
    //     // clearInterval();
    //     console.log(seconds);
    //     seconds++;
    // }
    // else if(seconds > 60) { 
    //     clearInterval();
    //     seconds=0;
    // }
}
$('#start-btn').click(Timer);