$(document).ready(function(){
    var now = new Date(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        hr = now.getHours(),
        tick = 360/60; // angle of 1 tick

    var secondArmPosition = tick * sec,
        minuteArmPosition = tick * min + sec/60 * tick,
        hourArmPosition = tick * 5 * hr + min/60 * tick * 5;

    function update(){
        secondArmPosition += tick; // second arm moves extra 6/60 deg every sec
        minuteArmPosition += tick/60; // minute arm moves extra 6/60 deg every sec
        hourArmPosition += tick/60/60; // hour arm moves extra 6/60/60 deg every sec
        
        $('#second').css('transform', `rotate(${secondArmPosition}deg)`);
        $('#hour').css('transform', `rotate(${hourArmPosition}deg)`);
        $('#minute').css('transform', `rotate(${minuteArmPosition}deg)`);
    }
    
    update();
    setInterval(update, 1000);
});
