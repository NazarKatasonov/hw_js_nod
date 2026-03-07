
let count = 0;
const interval = setInterval(() => {
    count++;
    console.log(`Повідомлення #${count}`);
    if (count === 5) {
        clearInterval(interval);
        console.log("Інтервал зупинено після 5 повідомлень");
    }
}, 1000);