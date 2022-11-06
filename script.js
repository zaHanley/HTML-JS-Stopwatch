var x;
var startstop = 0;

function startStop() {
    startstop = startstop + 1;
    if (startstop === 1) {
        startClock();
        document.getElementById('start').innerHTML = 'Stop'
        document.getElementById('start').style.backgroundColor = 'red'

    } else if (startstop === 2) {
        startstop = 0;
        stopClock();
        if (document.getElementById('mil').innerHTML == 00) {
            document.getElementById('winner').innerHTML = '~`!WoOoOoOoOoOoOoOoOoOoW yOuRe A gAmEr!`~';
        }
        document.getElementById('start').style.backgroundColor = 'green'
        document.getElementById('start').innerHTML = 'Start';
    }
}

function startClock() {
    x = setInterval(timer, 10)
}

function stopClock() {
    clearInterval(x)
}

var mil = 0
var sec = 0;
var min = 0;
var hour = 0;

var milOut = 0
var secOut = 0;
var minOut = 0;
var hourOut = 0;

function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

function timer() {
    milOut = checkTime(mil);
    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);

    mil = ++mil;
    if (mil == 100) {
        sec = ++sec;
        mil = 0
    }

    if (sec == 60) {
        min = ++ min;
        sec = 0;
    }

    if (min == 60) {
        hour = ++ hour;
        min = 0
    }
    document.getElementById("mil").innerHTML = milOut;
    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
    document.getElementById("hour").innerHTML = hourOut;
}

function reset() {
    sec = 0;
    min = 0;
    hour = 0;
    
    document.getElementById("winner").innerHTML = 'Stopwatch'
    document.getElementById("mil").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("hour").innerHTML = '00';
}