setInterval(myclock, 1000);

function myclock() {
  const date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hourRoation = 30*htime+mtime/2
    minsRoation = 6 * mtime;
    secsRoation = 6*stime;

    hours.style.transform = `rotate(${hourRoation}deg)`;
    mins.style.transform = `rotate(${minsRoation}deg)`;
    seconds.style.transform = `rotate(${secsRoation}deg)`;


    
}


