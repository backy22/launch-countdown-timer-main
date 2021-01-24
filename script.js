const day = document.getElementById('rest-days')
const hour = document.getElementById('rest-hours')
const minute = document.getElementById('rest-minutes')
const second = document.getElementById('rest-seconds')

setInterval(() => {
    var today = new Date();
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
    let diff = lastDayOfMonth - today
    let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff = diff - diffDays * (1000 * 60 * 60 * 24)
    let diffHours = Math.floor(diff / (1000 * 60 * 60));
    diff = diff - diffHours * (1000 * 60 * 60);
    let diffMins = Math.floor(diff / (1000 * 60));
    diff = diff - diffMins * (1000 * 60)
    let diffSeconds = Math.ceil(diff/1000)
    day.innerHTML = diffDays;
    hour.innerHTML = diffHours
    minute.innerHTML = diffMins;
    second.innerHTML = diffSeconds;
}, 1000)