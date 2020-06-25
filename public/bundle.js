/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/event-handler/common.js":
/*!*************************************!*\
  !*** ./src/event-handler/common.js ***!
  \*************************************/
/*! exports provided: handleMoveToNextInputElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleMoveToNextInputElement\", function() { return handleMoveToNextInputElement; });\nconst handleMoveToNextInputElement = (currElement) => {\n    const wrapperElement = currElement.parentElement.parentElement;\n    const nextInputElement = wrapperElement && wrapperElement.nextSibling;\n    console.log(wrapperElement);\n    console.log(nextInputElement);\n}\n\n\n//# sourceURL=webpack:///./src/event-handler/common.js?");

/***/ }),

/***/ "./src/event-handler/vendorSelect.js":
/*!*******************************************!*\
  !*** ./src/event-handler/vendorSelect.js ***!
  \*******************************************/
/*! exports provided: initEventHandlerOfVendorSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initEventHandlerOfVendorSelect\", function() { return initEventHandlerOfVendorSelect; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/event-handler/common.js\");\n\n\nconst initEventHandlerOfVendorSelect = () => {\n  const vendorSelectElement = document.querySelector('#vendorNm');\n  vendorSelectElement.addEventListener('change', Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"handleMoveToNextInputElement\"])(vendorSelectElement));\n};\n\n//# sourceURL=webpack:///./src/event-handler/vendorSelect.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_test1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/test1 */ \"./src/test/test1.js\");\n/* harmony import */ var _event_handler_vendorSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handler/vendorSelect */ \"./src/event-handler/vendorSelect.js\");\n\n\n\nconst init = () => {\n    Object(_test_test1__WEBPACK_IMPORTED_MODULE_0__[\"eventHandler\"])();\n    Object(_event_handler_vendorSelect__WEBPACK_IMPORTED_MODULE_1__[\"initEventHandlerOfVendorSelect\"])();\n}\n\ninit();\n\n// 통신사 selectbox\nconst benderData = [\n    {\"code\": \"SKT\", \"description\": \"SKT\"}\n    ,{\"code\": \"KT\", \"description\": \"KT\"}\n    ,{\"code\": \"LGT\", \"description\": \"LG U+\"}\n    ,{\"code\": \"SKTMVNO\", \"description\": \"SKT 알뜰폰\"}\n    ,{\"code\": \"KTMVNO\", \"description\": \"KT 알뜰폰\"}\n    ,{\"code\": \"LGTMVNO\", \"description\": \"LG U+ 알뜰폰\"}\n];\n\nconst benderOptions = benderData.map(bender => (`<option value=${bender.code}>${bender.description}</option>`)).join('');\nconst benderSelectbox = document.querySelector('#benderNm');\nbenderSelectbox.innerHTML = benderOptions;\n\n\n// 동의 checkbox\n// 약관 데이터\nconst termsData = [\n    {\"termsId\": \"1\", \"title\": \"본인확인 이용동의\", \"required\": true}\n    ,{\"termsId\": \"2\", \"title\": \"개인 정보 수집/이용/취습 위탁동의\", \"required\": true}\n    ,{\"termsId\": \"3\", \"title\": \"고유식별번호 처리 동의\", \"required\": true}\n    ,{\"termsId\": \"4\", \"title\": \"(선택) 카카오 플러스 친구 추가 동의\", \"required\": false}\n]\n\n// 약관 데이터 checkbox 생성\nconst termsLis = termsData.map(term => (`<li><input type=\"checkbox\" value=${term.termsId}>${term.title}</li>`)).join('');\nconst termsUl = document.querySelector('#terms');\ntermsUl.innerHTML = termsLis;\n\nconst allAgree = document.querySelector('#allAgree');\n// 전체 동의 click event 생성\nallAgree.addEventListener('click', (e) => {\n    const checked = e.target.checked;\n    [...termsUl.children].map(li => li.children[0].checked = checked);\n});\n\n// 개별 약관 click event 생성\n[...termsUl.children].map(li => {\n    const checkbox = li.children[0];\n    checkbox.addEventListener('click', () => {\n        // 개별 약관 check 해제 시, 전체동의 check 해제\n        if(!checkbox.checked) allAgree.checked = false;\n    });\n});\n\n\n\n\n\n\n\n// 휴대폰 번호 input\nconst phoneNumberInput = document.querySelector('#phoneNumber');\nphoneNumberInput.addEventListener('keyup', (e) => {\n    console.log(e);\n    const inputValue = e.target.value;\n    if(inputValue.length > 0) {\n        const keyValue = e.key;\n        if(!Number(keyValue)) {\n            // e.preventDefault();\n            // e.defaultPrevented = true;\n            phoneNumberInput.value = inputValue.replace(/[^0-9]/gi, '');\n        } else if(inputValue.length === 3) {\n            console.log('length 3');\n            phoneNumberInput.value = inputValue + \" \";\n        }\n    }\n});\n// phoneNumberInput.addEventListener('keyup', checkNumber);\n// function checkNumber(e) {\n//   console.log(e);\n//   const keyValue = e.key;\n//   if(!Number(keyValue)) {\n//     e.preventDefault();\n//     return false;\n//   }\n// }\n\n\n// 주민등록번호 input\nconst userSrnoInput = document.querySelector('#userSrno');\nuserSrnoInput.addEventListener('keyup', (e) => {\n    const value = e.target.value;\n    console.log(e.keyCode);\n    console.log(value.length);\n    if(value.length === 6) {\n        console.log(value);\n        userSrnoInput.value += \" - \";\n    }\n\n    // userSrnoInput.value = value;\n    console.log(userSrnoInput.value);\n});\n\n\n// 이름 input\nconst userNmInput = document.querySelector('#userNm');\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test/test1.js":
/*!***************************!*\
  !*** ./src/test/test1.js ***!
  \***************************/
/*! exports provided: eventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventHandler\", function() { return eventHandler; });\nconst eventHandler = () => {\n    // document.querySelector('.wrapper')\n    //     .addEventListener('click', () => alert('click'));\n};\n\n//# sourceURL=webpack:///./src/test/test1.js?");

/***/ })

/******/ });