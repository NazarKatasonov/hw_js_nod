
const container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "10px";
container.style.margin = "20px";
document.body.appendChild(container);

for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "tomato";
    container.appendChild(box);
}

let grow = true;
setInterval(() => {
    container.childNodes.forEach((box) => {
        let size = parseInt(box.style.width);
        if (grow) {
            size += 5;
            if (size >= 100) grow = false;
        } else {
            size -= 5;
            if (size <= 50) grow = true;
        }
        box.style.width = box.style.height = size + "px";
    });
}, 500);