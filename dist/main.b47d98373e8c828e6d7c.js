/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./DOMen.js":
/*!******************!*\
  !*** ./DOMen.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDOMen = function (el) {\n  const backtick = '`';\n  const slashEn = '/';\n  const slashRu = '\\\\';\n  el.innerHTML = `'<div class=\"container\">\n    <div class=\"night__mode\">\n        <div class=\"toggle__circle\"></div>\n    </div>\n    <div class=\"change__light__colors\">\n        <div class=\"colors\">\n            <input type=\"color\" class=\"colors__input\">\n        </div>\n    </div>\n    <div class=\"keyboard__wrapp\">\n        <div class=\"keyboard__lights\"></div>\n        <div class=\"keyboard__keys\">\n            <div class=\"row\">\n                <div class=\"keys\" rus='Ё' pressedShift=\"~\">${backtick}</div>\n                <div class=\"keys\" rus='1' pressedShift=\"!\">1</div>\n                <div class=\"keys\" rus='2' pressedShift=\"@\">2</div>\n                <div class=\"keys\" rus='3' pressedShift=\"#\">3</div>\n                <div class=\"keys\" rus='4' pressedShift=\"$\">4</div>\n                <div class=\"keys\" rus='5' pressedShift=\"%\">5</div>\n                <div class=\"keys\" rus='6' pressedShift=\"^\">6</div>\n                <div class=\"keys\" rus='7' pressedShift=\"&\">7</div>\n                <div class=\"keys\" rus='8' pressedShift=\"*\">8</div>\n                <div class=\"keys\" rus='9' pressedShift=\"(\">9</div>\n                <div class=\"keys\" rus='0' pressedShift=\")\">0</div>\n                <div class=\"keys\" rus='-' pressedShift=\"_\">-</div>\n                <div class=\"keys\" rus='=' pressedShift=\"+\">=</div>\n                <div class=\"keys backspace_key\" rus='Backspace' pressedShift=\"Backspace\">Backspace</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"keys tab_key\" rus='Tab' pressedShift=\"Tab\">Tab</div>\n                <div class=\"keys\" rus='Й' pressedShift=\"Q\">Q</div>\n                <div class=\"keys\" rus='Ц' pressedShift=\"W\">W</div>\n                <div class=\"keys\" rus='У' pressedShift=\"E\">E</div>\n                <div class=\"keys\" rus='К' pressedShift=\"R\">R</div>\n                <div class=\"keys\" rus='Е' pressedShift=\"T\">T</div>\n                <div class=\"keys\" rus='Н' pressedShift=\"Y\">Y</div>\n                <div class=\"keys\" rus='Г' pressedShift=\"U\">U</div>\n                <div class=\"keys\" rus='Ш' pressedShift=\"I\">I</div>\n                <div class=\"keys\" rus='Щ' pressedShift=\"O\">O</div>\n                <div class=\"keys\" rus='З' pressedShift=\"P\">P</div>\n                <div class=\"keys\" rus='Х' pressedShift=\"{\">[</div>\n                <div class=\"keys\" rus='Ъ' pressedShift=\"}\">]</div>\n                <div class=\"keys slash_key\" rus='${slashRu}' pressedShift=\"|\">${slashEn}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"keys caps_lock_key\" rus='Caps Lock' pressedShift=\"Caps Lock\">Caps Lock</div>\n                <div class=\"keys\" rus='Ф' pressedShift=\"A\">A</div>\n                <div class=\"keys\" rus='Ы' pressedShift=\"S\">S</div>\n                <div class=\"keys\" rus='В' pressedShift=\"D\">D</div>\n                <div class=\"keys\" rus='А' pressedShift=\"F\">F</div>\n                <div class=\"keys\" rus='П' pressedShift=\"G\">G</div>\n                <div class=\"keys\" rus='Р' pressedShift=\"H\">H</div>\n                <div class=\"keys\" rus='О' pressedShift=\"J\">J</div>\n                <div class=\"keys\" rus='Л' pressedShift=\"K\">K</div>\n                <div class=\"keys\" rus='Д' pressedShift=\"L\">L</div>\n                <div class=\"keys\" rus='Ж' pressedShift=\":\">;</div>\n                <div class=\"keys\" rus='Э' pressedShift='\"'>'</div>\n                <div class=\"keys enter_key\" rus='Enter' pressedShift=\"Enter\">Enter</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"keys shift_key shift_left\" rus='Shift' pressedShift=\"Shift\">Shift</div>\n                <div class=\"keys\" rus='Я' pressedShift=\"Z\">Z</div>\n                <div class=\"keys\" rus='Ч' pressedShift=\"X\">X</div>\n                <div class=\"keys\" rus='С' pressedShift=\"C\">C</div>\n                <div class=\"keys\" rus='М' pressedShift=\"V\">V</div>\n                <div class=\"keys\" rus='И' pressedShift=\"B\">B</div>\n                <div class=\"keys\" rus='Т' pressedShift=\"N\">N</div>\n                <div class=\"keys\" rus='Ь' pressedShift=\"M\">M</div>\n                <div class=\"keys\" rus='Б' pressedShift=\"<\">,</div>\n                <div class=\"keys\" rus='Ю' pressedShift=\">\">.</div>\n                <div class=\"keys\" rus='.' pressedShift=\"?\">/</div>\n                <div class=\"keys dir_key dir_top\" rus='↑' pressedShift=\"↑\">↑</div>\n                <div class=\"keys shift_key shift_right\" rus='Shift' pressedShift=\"Shift\">Shift</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"keys ctrl_key ctrl_left\" rus=Ctrl'' pressedShift=\"Ctrl\">Ctrl</div>\n                <div class=\"keys fn_key\" rus='Fn' pressedShift=\"Fn\">Fn</div>\n                <div class=\"keys win_key\" rus='Win' pressedShift=\"Win\">Win</div>\n                <div class=\"keys alt_key alt_left\" rus='Alt' pressedShift=\"Alt\">Аlt</div>\n                <div class=\"keys space_key\" rus='Space' pressedShift=\"Space\">Space</div>\n                <div class=\"keys alt_key alt_right\" rus='Alt' pressedShift=\"Alt\">Аlt</div>\n                <div class=\"keys ctrl_key ctrl_right\" rus='Ctrl' pressedShift=\"Ctrl\">Ctrl</div>\n                <div class=\"keys dir_key dir_left\" rus='←' pressedShift=\"←\">←</div>\n                <div class=\"keys dir_key dir_bottom\" rus='↓' pressedShift=\"↓\">↓</div>\n                <div class=\"keys dir_key dir_right\" rus='→' pressedShift=\"→\">→</div>\n                <div class=\"keys non_visible\" dir_key dir_right\" rus='.' pressedShift=\".\">.</div>\n            </div>\n        </div>\n    </div>\n    <textarea name=\"text\" id=\"\" autofocus></textarea>\n</div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDOMen);\n\n\n//# sourceURL=webpack:///./DOMen.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _DOMen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMen */ \"./DOMen.js\");\n\n\n\nconst body = document.querySelector('body');\n\n(0,_DOMen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body);\n\nlet currentLanguage = 'en';\nconst keys = document.querySelectorAll('.keys');\nconst spaceKey = document.querySelector('.space_key');\nconst shiftLeft = document.querySelector('.shift_left');\nconst shiftRight = document.querySelector('.shift_right');\nconst capsLockKey = document.querySelector('.caps_lock_key');\nconst toggleCircle = document.querySelector('.toggle__circle');\nconst nightMode = document.querySelector('.night__mode');\nconst changeColor = document.querySelector('.change__light__colors');\nconst colorsInput = document.querySelector('.colors__input');\nconst keyboardLights = document.querySelector('.keyboard__lights');\nconst keyboardWrapp = document.querySelector('.keyboard__wrapp');\nconst tab = document.querySelector('.tab_key');\nconst arrowUp = document.querySelector('.dir_top');\nconst arrowLeft = document.querySelector('.dir_left');\nconst arrowRight = document.querySelector('.dir_right');\nconst arrowBottom = document.querySelector('.dir_bottom');\nconst ctrlLeft = document.querySelector('.ctrl_left');\nconst ctrlRight = document.querySelector('.ctrl_right');\nconst altLeft = document.querySelector('.alt_left');\nconst altRight = document.querySelector('.alt_right');\nconst win = document.querySelector('.win_key');\nconst text = document.querySelector('textarea');\nconst fn = document.querySelector('.fn_key');\nconst backspace = document.querySelector('.backspace_key');\nconst enter = document.querySelector('.enter_key');\n\nfor (let i = 0; i < keys.length; i += 1) {\n  keys[i].setAttribute('keyname', keys[i].innerText);\n  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());\n  keys[i].setAttribute('rusShift', keys[i].getAttribute('rus').toLowerCase());\n}\n\nwindow.addEventListener('keydown', (e) => {\n  for (let i = 0; i < keys.length; i += 1) {\n    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName') || e.key === keys[i].getAttribute('pressedShift') || e.key === keys[i].getAttribute('rus')\n    || e.key === keys[i].getAttribute('rusShift')) {\n      keys[i].classList.add('active');\n    }\n    if (e.code === 'Space') {\n      spaceKey.classList.add('active');\n    }\n    if (e.code === 'ShiftLeft') {\n      e.preventDefault();\n      shiftRight.classList.remove('active');\n    }\n    if (e.code === 'ShiftRight') {\n      e.preventDefault();\n      shiftLeft.classList.remove('active');\n    }\n    if (e.code === 'CapsLock') {\n      capsLockKey.classList.toggle('active');\n    }\n    if (e.code === 'Tab') {\n      e.preventDefault();\n      tab.classList.add('active');\n    }\n    if (e.code === 'ArrowDown') {\n      arrowBottom.classList.add('active');\n    }\n    if (e.code === 'ArrowUp') {\n      arrowUp.classList.add('active');\n    }\n    if (e.code === 'ArrowLeft') {\n      arrowLeft.classList.add('active');\n    }\n    if (e.code === 'ArrowRight') {\n      arrowRight.classList.add('active');\n    }\n    if (e.code === 'ControlLeft') {\n      ctrlLeft.classList.add('active');\n    }\n    if (e.code === 'ControlRight') {\n      ctrlRight.classList.add('active');\n    }\n    if (e.code === 'AltLeft') {\n      e.preventDefault();\n      altRight.classList.remove('active');\n    }\n    if (e.code === 'AltRight') {\n      altLeft.classList.remove('active');\n      e.preventDefault();\n    }\n    if (e.code === 'MetaLeft') {\n      e.preventDefault();\n      win.classList.add('active');\n    }\n  }\n});\n\nwindow.addEventListener('keyup', (e) => {\n  for (let i = 0; i < keys.length; i += 1) {\n    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName') || e.key === keys[i].getAttribute('pressedShift') || e.key === keys[i].getAttribute('rus') || e.key === keys[i].getAttribute('rusShift')) {\n      keys[i].classList.remove('active');\n      keys[i].classList.add('remove');\n    }\n\n    if (e.code === 'Space') {\n      spaceKey.classList.remove('active');\n      spaceKey.classList.add('remove');\n    }\n\n    if (e.code === 'ShiftLeft') {\n      shiftRight.classList.remove('active');\n      shiftRight.classList.remove('remove');\n    }\n\n    if (e.code === 'ShiftRight') {\n      shiftLeft.classList.remove('active');\n      shiftLeft.classList.remove('remove');\n    }\n\n    if (e.code === 'Tab') {\n      e.preventDefault();\n      tab.classList.remove('active');\n      tab.classList.remove('remove');\n    }\n    if (e.code === 'ArrowDown') {\n      arrowBottom.classList.remove('active');\n      arrowBottom.classList.remove('remove');\n    }\n    if (e.code === 'ArrowUp') {\n      arrowUp.classList.remove('active');\n      arrowUp.classList.remove('remove');\n    }\n    if (e.code === 'ArrowLeft') {\n      arrowLeft.classList.remove('active');\n      arrowLeft.classList.remove('remove');\n    }\n    if (e.code === 'ArrowRight') {\n      arrowRight.classList.remove('active');\n      arrowRight.classList.remove('remove');\n    }\n    if (e.code === 'ControlLeft') {\n      ctrlLeft.classList.remove('active');\n      ctrlLeft.classList.remove('remove');\n    }\n    if (e.code === 'ControlRight') {\n      ctrlRight.classList.remove('active');\n      ctrlRight.classList.remove('remove');\n    }\n\n    if (e.code === 'AltLeft') {\n      altRight.classList.remove('active');\n      altRight.classList.remove('remove');\n      if (shiftLeft.classList.contains('active')) {\n        if (currentLanguage === 'en') {\n          for (let l = 0; l < keys.length; l += 1) {\n            if (keys[l].innerText !== keys[l].getAttribute('rus')) {\n              keys[l].innerText = keys[l].getAttribute('rus');\n            }\n          }\n          currentLanguage = 'rus';\n        } else {\n          for (let l = 0; l < keys.length; l += 1) {\n            if (keys[l].innerText !== keys[l].getAttribute('keyname')) {\n              keys[l].innerText = keys[l].getAttribute('keyname');\n            }\n          }\n          currentLanguage = 'en';\n        }\n\n        e.preventDefault();\n      }\n    }\n\n    if (e.code === 'AltRight') {\n      altLeft.classList.remove('active');\n      altLeft.classList.remove('remove');\n      e.preventDefault();\n    }\n    if (e.code === 'MetaLeft') {\n      e.preventDefault();\n      win.classList.remove('active');\n    }\n\n    // eslint-disable-next-line no-loop-func\n    setTimeout(() => {\n      keys[i].classList.remove('remove');\n    }, 200);\n  }\n});\n\nnightMode.addEventListener('click', () => {\n  toggleCircle.classList.toggle('active');\n  body.classList.toggle('active');\n  nightMode.classList.toggle('active');\n  keyboardWrapp.classList.toggle('active');\n  changeColor.classList.toggle('active');\n  for (let i = 0; i < keys.length; i += 1) {\n    keys[i].classList.toggle('keys_night');\n  }\n});\n\ncolorsInput.addEventListener('input', () => {\n  for (let i = 0; i < keys.length; i += 1) {\n    keys[i].style.color = colorsInput.value;\n  }\n  keyboardLights.style.background = colorsInput.value;\n});\n\nfor (let i = 0; i < keys.length; i += 1) {\n  // eslint-disable-next-line no-loop-func\n  keys[i].addEventListener('mousedown', () => {\n    if (keys[i] !== capsLockKey) {\n      keys[i].classList.add('active');\n    }\n    if (keys[i] !== spaceKey && keys[i] !== shiftRight && keys[i] !== shiftLeft\n        && keys[i] !== capsLockKey && keys[i] !== tab && keys[i] !== arrowUp\n        && keys[i] !== arrowLeft && keys[i] !== arrowRight && keys[i] !== arrowBottom\n        && keys[i] !== ctrlLeft && keys[i] !== ctrlRight && keys[i] !== altLeft\n        && keys[i] !== altRight && keys[i] !== win && keys[i] !== fn && keys[i] !== backspace\n        && keys[i] !== enter) {\n      if (capsLockKey.classList.contains('active')) {\n        text.value += keys[i].innerText;\n      } else {\n        text.value += keys[i].innerText.toLowerCase();\n      }\n    }\n    if (keys[i] === spaceKey) {\n      text.setRangeText(' ', text.selectionStart, text.selectionEnd, 'end');\n    }\n    if (keys[i] === tab) {\n      text.setRangeText('\\t', text.selectionStart, text.selectionEnd, 'end');\n    }\n    if (keys[i] === capsLockKey) {\n      keys[i].classList.toggle('active');\n    }\n    if (keys[i] === backspace) {\n      text.setRangeText('', text.selectionStart > 0 ? text.selectionStart - 1 : 0, text.selectionEnd, 'end');\n    }\n    if (keys[i] === enter) {\n      text.value += '\\r\\n';\n    }\n    if (keys[i] === arrowUp) {\n      text.value += '↑';\n    }\n    if (keys[i] === arrowLeft) {\n      text.value += '←';\n    }\n    if (keys[i] === arrowRight) {\n      text.value += '→';\n    }\n    if (keys[i] === arrowBottom) {\n      text.value += '↓';\n    }\n  });\n}\n\nfor (let i = 0; i < keys.length; i += 1) {\n  keys[i].addEventListener('mouseup', () => {\n    if (keys[i] !== capsLockKey) {\n      keys[i].classList.remove('active');\n      keys[i].classList.add('remove');\n      setTimeout(() => {\n        keys[i].classList.remove('remove');\n      }, 200);\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;