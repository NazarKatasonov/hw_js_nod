
const gameContainer = document.createElement("div");
gameContainer.style.display = "flex";
gameContainer.style.gap = "10px";
gameContainer.style.margin = "20px";
document.body.appendChild(gameContainer);

let score = 0;
const scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = `Очки: ${score}`;
document.body.appendChild(scoreDisplay);

for (let i = 0; i < 5; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Натисни мене ${i+1}`;
    btn.onclick = () => {
        score++;
        scoreDisplay.textContent = `Очки: ${score}`;
    };
    gameContainer.appendChild(btn);
}

setTimeout(() => {
    alert(`Гра закінчена! Ваш результат: ${score}`);
}, 15000);