
let hourTime = 60; 
const hourInterval = setInterval(() => {
    hourTime--;
    console.log(`Залишилось ${hourTime} хвилин`);
    if (hourTime === 30) alert("Залишилось менше половини часу!");
    if (hourTime <= 0) clearInterval(hourInterval);
}, 60000); 


let secTime = 30 * 1000; 
const secDisplay = document.createElement("p");
document.body.appendChild(secDisplay);
const startBtn = document.createElement("button");
startBtn.textContent = "Почати таймер";
document.body.appendChild(startBtn);

startBtn.onclick = () => {
    startBtn.disabled = true;
    const secStart = Date.now();
    const interval = setInterval(() => {
        const remaining = secTime - (Date.now() - secStart);
        secDisplay.textContent = `Залишилось ${(remaining/1000).toFixed(2)} секунд`;
        if (remaining <= 10000) secDisplay.style.color = "red"; // анімація (зміна кольору)
        if (remaining <= 0) {
            clearInterval(interval);
            secDisplay.textContent = "Час вийшов!";
            startBtn.disabled = false;
        }
    }, 10); 
};