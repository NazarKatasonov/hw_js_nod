
  const slider = document.querySelector('.slider__input');
  const image = document.querySelector('.slider__image');

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  const resizeImage = debounce((value) => {
    image.style.width = value + '%';
  }, 200);

  slider.addEventListener('input', (e) => {
    resizeImage(e.target.value);
  });




  const box = document.getElementById('box');

  const moveBox = _.debounce((event) => {
    box.style.left = event.clientX + 'px';
    box.style.top = event.clientY + 'px';
  }, 100);

  document.addEventListener('mousemove', moveBox);

