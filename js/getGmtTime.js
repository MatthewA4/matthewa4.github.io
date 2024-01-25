/* Copyright (C) Matthew Anderson */

function getGMT() {
    const GMT_TIME = new Date().toGMTString();
    document.getElementById("GMT_TIME").innerText = GMT_TIME;
}

setInterval(getGMT,1000);

getGMT();