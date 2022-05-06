import './styles/styles.css';

const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLockKey = document.querySelector('.space_key');
const toggleCircle = document.querySelector('.toggle__circle');
const nightMode = document.querySelector('.night__mode');
const body = document.querySelector('body');
const textInput = document.querySelector('textarea');
const changeColor = document.querySelector('.change__light__colors');
const colorsInput = document.querySelector('.colors__input');
const keyboardLights = document.querySelector('.keyboard__lights');
const keyboardWrapp = document.querySelector('.keyboard__wrapp');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLockKey.classList.toggle('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }

    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }

    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
    }

    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
    }
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});

nightMode.addEventListener('click', () => {
  toggleCircle.classList.toggle('active');
  body.classList.toggle('active');
  nightMode.classList.toggle('active');
  keyboardWrapp.classList.toggle('active');
  textInput.classList.toggle('active');
  changeColor.classList.toggle('active');
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].classList.toggle('keys_night');
  }
});

colorsInput.addEventListener('input', () => {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].style.color = colorsInput.value;
  }
  keyboardLights.style.background = colorsInput.value;
});
