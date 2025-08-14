// countdown 

const timerDuration = 6 * 60 * 60 * 1000;
let timerEnd = new Date().getTime() + timerDuration;

function updateTimer() {
  let remainingTime = timerEnd - new Date().getTime();

  if (remainingTime <= 0) {
    timerEnd = new Date().getTime() + timerDuration;
    remainingTime = timerEnd - new Date().getTime();
  }

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();


// filter Menu Button

function filterMenu(category) {
  const menuSection = document.querySelector('.container.my-5');
  if (!menuSection) return;

  const cards = menuSection.querySelectorAll('.col-md-4');

  for (let card of cards) {
    card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? 'block' : 'none';
  }
}




// scrolling 

const animatedElements = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
  for (let i = 0; i < animatedElements.length; i++) {
    const el = animatedElements[i];
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 50 && !el.classList.contains('visible')) {
      el.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower', 'visible');
      el.classList.remove('opacity-0');
    }
  }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);




//Add animation heartBeat
function heartbeatPulse(el) {
  el.classList.remove('animate__heartBeat');
  void el.offsetWidth;
  el.classList.add('animate__animated', 'animate__heartBeat');
}
let pulseElements = document.querySelectorAll('.pulse-section, .special-offer');

for (let i = 0; i < pulseElements.length; i++) {
  let el = pulseElements[i];
  heartbeatPulse(el);
  setInterval(() => heartbeatPulse(el), 5000);
}



















