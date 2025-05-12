/*|#MakVie-SAinte|*/

const spanContainers = document.querySelectorAll('.titre div');

spanContainers.forEach(item => {
  const my_letters = item.children[0].textContent.split('');
  item.innerHTML = "";
  my_letters.forEach((element, index) => {
    const span = document.createElement('span'); 
    span.style.transitionDelay = `${0.06 * index}s`;
    span.textContent = element;
    span.classList.add('initial-spacing'); 
    item.appendChild(span); 
  });
});

window.onload = () => {
  setTimeout(() => {
    document.querySelectorAll('.titre span').forEach(span => {
      span.classList.remove('initial-spacing'); 
    });
  }, 900);
};

/* 925DEV */