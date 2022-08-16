setInterval(() => {
    d = new Date();
    thour = d.getHours();
    tmin = d.getMinutes()
    tsec = d.getSeconds();
    hrotation = 30*thour + tmin/2;
    mrotation = 6*tmin;
    srotation = 6*tsec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

