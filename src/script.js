import './styles/styles.css';
import createDOMen from './DOMen';
import createDOMrus from './DOMrus';

const body = document.querySelector('body');

createDOMen(body);

const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLockKey = document.querySelector('.caps_lock_key');
const toggleCircle = document.querySelector('.toggle__circle');
const nightMode = document.querySelector('.night__mode');
const changeColor = document.querySelector('.change__light__colors');
const colorsInput = document.querySelector('.colors__input');
const keyboardLights = document.querySelector('.keyboard__lights');
const keyboardWrapp = document.querySelector('.keyboard__wrapp');
const tab = document.querySelector('.tab_key');
const arrowUp = document.querySelector('.dir_top');
const arrowLeft = document.querySelector('.dir_left');
const arrowRight = document.querySelector('.dir_right');
const arrowBottom = document.querySelector('.dir_bottom');
const ctrlLeft = document.querySelector('.ctrl_left');
const ctrlRight = document.querySelector('.ctrl_right');
const altLeft = document.querySelector('.alt_left');
const altRight = document.querySelector('.alt_right');
const win = document.querySelector('.win_key');
const pressed = new Set();
const text = document.querySelector('textarea');
const fn = document.querySelector('.fn_key');
const backspace = document.querySelector('.backspace_key');
const enter = document.querySelector('.enter_key');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName') || e.key === keys[i].getAttribute('pressedShift')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      e.preventDefault();
      shiftRight.classList.remove('active');
      for (let k = 0; k < keys.length; k += 1) {
        if (keys[k].innerText !== keys[k].getAttribute('pressedShift')) {
          keys[k].innerText = keys[k].getAttribute('pressedShift');
        }
      }
    }
    if (e.code === 'ShiftRight') {
      e.preventDefault();
      shiftLeft.classList.remove('active');
      for (let k = 0; k < keys.length; k += 1) {
        if (keys[k].innerText !== keys[k].getAttribute('pressedShift')) {
          keys[k].innerText = keys[k].getAttribute('pressedShift');
        }
      }
    }
    if (e.code === 'CapsLock') {
      capsLockKey.classList.toggle('active');
    }
    if (e.code === 'Tab') {
      e.preventDefault();
      tab.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.add('active');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      e.preventDefault();
      altRight.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      altLeft.classList.remove('active');
      e.preventDefault();
    }
    if (e.code === 'MetaLeft') {
      e.preventDefault();
      win.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName') || e.key === keys[i].getAttribute('pressedShift')) {
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
      for (let k = 0; k < keys.length; k += 1) {
        if (keys[k].innerText === keys[k].getAttribute('pressedShift')) {
          keys[k].innerText = keys[k].getAttribute('keyname');
        }
      }
    }

    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
      for (let k = 0; k < keys.length; k += 1) {
        if (keys[k].innerText === keys[k].getAttribute('pressedShift')) {
          keys[k].innerText = keys[k].getAttribute('keyname');
        }
      }
    }

    if (e.code === 'Tab') {
      e.preventDefault();
      tab.classList.remove('active');
      tab.classList.remove('remove');
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.remove('active');
      arrowBottom.classList.remove('remove');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.remove('remove');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.remove('remove');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.remove('remove');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      ctrlLeft.classList.remove('remove');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      ctrlRight.classList.remove('remove');
    }

    if (e.code === 'AltLeft') {
      altRight.classList.remove('active');
      altRight.classList.remove('remove');
      e.preventDefault();
    }
    if (e.code === 'AltRight') {
      altLeft.classList.remove('active');
      altLeft.classList.remove('remove');
      e.preventDefault();
    }
    if (e.code === 'MetaLeft') {
      e.preventDefault();
      win.classList.remove('active');
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

for (let i = 0; i < keys.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  keys[i].addEventListener('mousedown', () => {
    if (keys[i] !== capsLockKey) {
      keys[i].classList.add('active');
    }
    if (keys[i] !== spaceKey && keys[i] !== shiftRight && keys[i] !== shiftLeft
        && keys[i] !== capsLockKey && keys[i] !== tab && keys[i] !== arrowUp
        && keys[i] !== arrowLeft && keys[i] !== arrowRight && keys[i] !== arrowBottom
        && keys[i] !== ctrlLeft && keys[i] !== ctrlRight && keys[i] !== altLeft
        && keys[i] !== altRight && keys[i] !== win && keys[i] !== fn && keys[i] !== backspace
        && keys[i] !== enter) {
      if (capsLockKey.classList.contains('active')) {
        text.value += keys[i].innerText;
      } else {
        text.value += keys[i].innerText.toLowerCase();
      }
    }
    if (keys[i] === spaceKey) {
      text.value += ' ';
    }
    if (keys[i] === tab) {
      text.value += '\t';
    }
    if (keys[i] === capsLockKey) {
      keys[i].classList.toggle('active');
    }
    if (keys[i] === backspace) {
      let a = text.value.split('');
      text.value = a.slice(0, a.length - 1).join('');
    }
    if (keys[i] === enter) {
      text.value += '\r\n';
    }
  });
}

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('mouseup', () => {
    if (keys[i] !== capsLockKey) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
      setTimeout(() => {
        keys[i].classList.remove('remove');
      }, 200);
    }
  });
}
