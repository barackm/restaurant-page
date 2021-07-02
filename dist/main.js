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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactContainer = () => {\n  const container = document.createElement('div');\n  const header = document.createElement('div');\n  const details = document.createElement('p');\n  const title = document.createElement('h3');\n  const subtitle = document.createElement('h1');\n  const contactWrapper = document.createElement('div');\n  const form = document.createElement('form');\n  const inputsWrapper = document.createElement('div');\n  const nameInput = document.createElement('input');\n  const emailInput = document.createElement('input');\n  const websiteInput = document.createElement('input');\n  const messageInput = document.createElement('textarea');\n  const inputSubmit = document.createElement('button');\n  const messageWrapper = document.createElement('div');\n\n  nameInput.setAttribute('type', 'text');\n  nameInput.setAttribute('name', 'name');\n  nameInput.setAttribute('placeholder', 'Name');\n  emailInput.setAttribute('type', 'text');\n  emailInput.setAttribute('name', 'Email');\n  emailInput.setAttribute('placeholder', 'Email');\n  websiteInput.setAttribute('type', 'text');\n  websiteInput.setAttribute('name', 'Website');\n  websiteInput.setAttribute('placeholder', 'Website');\n  messageInput.setAttribute('name', 'Message');\n  messageInput.setAttribute('placeholder', 'Message');\n  inputSubmit.setAttribute('type', 'submit');\n  inputSubmit.setAttribute('class', 'contact-submit-btn');\n  container.setAttribute('id', 'contact');\n\n  container.classList\n    += 'contact-page-main-container flex-center flex-column d-none';\n  inputsWrapper.classList += 'inputs-wrapper flex-center';\n  contactWrapper.classList += 'contact-page-input-area';\n  messageWrapper.classList += 'text-area flex-center';\n  header.classList += 'header flex-center text-center flex-column';\n  subtitle.classList += 'subtitle';\n  details.classList += 'details';\n  title.classList += 'title';\n\n  title.innerHTML = 'TRY & DISCOVER';\n  subtitle.innerHTML = 'CONTACT';\n  inputSubmit.innerHTML = 'Send';\n  details.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam!';\n\n  header.appendChild(title);\n  header.appendChild(subtitle);\n  header.appendChild(details);\n  inputsWrapper.appendChild(nameInput);\n  inputsWrapper.appendChild(emailInput);\n  inputsWrapper.appendChild(websiteInput);\n  messageWrapper.appendChild(messageInput);\n  form.appendChild(inputsWrapper);\n  form.appendChild(messageWrapper);\n  form.appendChild(inputSubmit);\n\n  container.appendChild(header);\n  contactWrapper.appendChild(form);\n\n  container.appendChild(contactWrapper);\n\n  return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContainer);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n  const mainHeaderContainer = document.createElement('header');\n  mainHeaderContainer.classList = 'flex-between';\n  const logo = document.createElement('a');\n  logo.classList += 'logo';\n  logo.innerHTML = \"<img src='https://res.cloudinary.com/fidbagraphicscode/image/upload/v1625232518/samples/Pngtree_vector_of_chicken_chef_character_5003581_xzazni.png'></img>\";\n  logo.setAttribute('alt', 'logo');\n  logo.setAttribute('href', '#');\n\n  const nav = document.createElement('nav');\n  nav.setAttribute('class', 'flex-center');\n  nav.innerHTML = \"<ul class='flex-center'><li><a class='home-link' href='#'>Home</a></li><li><a href='#' class='menu-link'>Menu</a></li><li><a href='#' class='contact-link'>Contact</a></li></ul>\";\n\n  mainHeaderContainer.appendChild(logo);\n  mainHeaderContainer.appendChild(nav);\n  return mainHeaderContainer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeContainer = () => {\n  const container = document.createElement('div');\n  const overlay = document.createElement('div');\n  const content = document.createElement('div');\n  const btn = document.createElement('a');\n\n  btn.setAttribute('class', 'home-menu-btn');\n  btn.setAttribute('href', '#');\n  container.setAttribute('id', 'home');\n\n  container.classList += 'home-container flex-center';\n  overlay.classList += 'home-overlay';\n  content.classList += 'home-hero-container text-center';\n  content.innerHTML = \"<h3 class='hero-welcome'>Welcome</h3><h1 class='hero-text'>NIKY RESTAURANT</h1><p>AT OUR RESTAURANT WE BRING YOU A LITTLE PIECE OF DRC.</p>\";\n  btn.innerHTML = 'View menu ';\n\n  content.appendChild(btn);\n  container.appendChild(overlay);\n  container.appendChild(content);\n\n  return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContainer);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n_initialize__WEBPACK_IMPORTED_MODULE_3__.default.append((0,_header__WEBPACK_IMPORTED_MODULE_0__.default)());\n\nconst showHomeLink = document.querySelector('.home-link');\nconst showMenuLink = document.querySelector('.menu-link');\nconst showContactLink = document.querySelector('.contact-link');\n\n_initialize__WEBPACK_IMPORTED_MODULE_3__.default.append((0,_home__WEBPACK_IMPORTED_MODULE_2__.default)());\n_initialize__WEBPACK_IMPORTED_MODULE_3__.default.append((0,_menu__WEBPACK_IMPORTED_MODULE_4__.default)());\n_initialize__WEBPACK_IMPORTED_MODULE_3__.default.append((0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)());\n\nshowContactLink.addEventListener('click', (e) => {\n  e.preventDefault();\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('menu');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('home');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.revealEl('contact');\n});\n\nshowHomeLink.addEventListener('click', (e) => {\n  e.preventDefault();\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('contact');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('menu');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.revealEl('home');\n});\n\nshowMenuLink.addEventListener('click', (e) => {\n  e.preventDefault();\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('home');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.removeEl('contact');\n  _initialize__WEBPACK_IMPORTED_MODULE_3__.default.revealEl('menu');\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialize = (function () {\n  const mainContainer = document.getElementById('content');\n  const append = (el) => {\n    mainContainer.appendChild(el);\n  };\n\n  const removeEl = (id) => {\n    const element = document.getElementById(id);\n    element.style.display = 'none';\n  };\n\n  const revealEl = (id) => {\n    const element = document.getElementById(id);\n    element.style.display = 'flex';\n  };\n\n  return {\n    append,\n    removeEl,\n    revealEl,\n  };\n}());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialize.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuContainer = () => {\n  const dishes = [\n    {\n      id: 1,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n    {\n      id: 2,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n    {\n      id: 3,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n    {\n      id: 4,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n    {\n      id: 5,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n    {\n      id: 6,\n      name: 'VEAL MINI ESCALOPES',\n      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',\n      price: 10,\n    },\n  ];\n\n  const container = document.createElement('div');\n  const header = document.createElement('div');\n  const details = document.createElement('p');\n  const title = document.createElement('h3');\n  const subtitle = document.createElement('h1');\n  const cardsWrapper = document.createElement('div');\n\n  container.classList += 'menu-page-container flex-start flex-column d-none';\n  header.classList += 'header flex-center text-center flex-column';\n  subtitle.classList += 'subtitle';\n  details.classList += 'details';\n  title.classList += 'title';\n  cardsWrapper.classList += 'card-main-container';\n\n  title.innerHTML = 'TRY & DISCOVER';\n  subtitle.innerHTML = 'OUR DISHES';\n  details.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam!';\n\n  container.setAttribute('id', 'menu');\n  header.appendChild(title);\n  header.appendChild(subtitle);\n  header.appendChild(details);\n  container.appendChild(header);\n\n  dishes.map((dish) => {\n    const card = document.createElement('a');\n    const overlay = document.createElement('div');\n    const name = document.createElement('h4');\n    const price = document.createElement('h5');\n    const image = document.createElement('img');\n\n    overlay.classList\n      += 'card-overlay-wrapper flex-center flex-column text-center';\n    name.classList += 'dish-name';\n    price.classList += 'dish-price';\n    card.classList += 'card-item-wrapper';\n\n    image.setAttribute('src', dish.img);\n    image.setAttribute('alt', dish.name);\n    name.innerHTML = dish.name;\n    price.innerHTML = dish.price;\n\n    overlay.appendChild(name);\n    overlay.appendChild(price);\n    card.appendChild(overlay);\n    card.appendChild(image);\n\n    return cardsWrapper.appendChild(card);\n  });\n\n  container.appendChild(cardsWrapper);\n  return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContainer);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;