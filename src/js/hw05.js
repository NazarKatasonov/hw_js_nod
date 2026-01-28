
const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'q', 'w'];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById('key');
const newGameButton = document.getElementById('new-game');


function setCurrentKey() {
  keyDisplay.textContent = keys[currentKeyIndex];
}


setCurrentKey();


document.addEventListener('keydown', event => {
  const pressedKey = event.key;

  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex += 1;

    if (currentKeyIndex === keys.length) {
      PNotify.success({
        text: 'перемога',
      });
      currentKeyIndex = 0;
    } else {
      PNotify.success({
        text: ' правильно',
      });
    }

    setCurrentKey();
  } else {
    PNotify.error({
      text: 'нєто',
    });
  }
});


document.addEventListener('keypress', event => {
  event.preventDefault();
});


newGameButton.addEventListener('click', () => {
  currentKeyIndex = 0;
  setCurrentKey();

  PNotify.info({
    text: 'нова гра',
  });
});



const chartData = {
  labels: [
    '1','2','3','4','5','6','7','8','9','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30',
  ],
  datasets: [
    {
      label: 'Продажі за останній місяць',
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
        420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
        900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350,
      ],
      backgroundColor: '#2196f3',
      borderColor: '#2196f3',
      borderWidth: 2,
      fill: false,
      tension: 0.3,
    },
  ],
};

const ctx = document.getElementById('sales-chart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
