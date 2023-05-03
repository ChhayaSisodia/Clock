// Clock Logic 
setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hourrotation = 30 * hours + minutes / 2;
    minrotation = 6 * minutes;
    secrotation = 6 * seconds;

    hourHand.style.transform = `rotate(${hourrotation}deg)`;
    minHand.style.transform = `rotate(${minrotation}deg)`;
    secHand.style.transform = `rotate(${secrotation}deg)`;

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    // For Time in number
    document.getElementById("time-in-number").innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);

// For Button and Thought
let button = document.getElementById("btn");
button.addEventListener('click', () => {
    document.getElementById("thought").innerHTML = "<span>Now</span> is the right time";
})
