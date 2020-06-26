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

/***/ "./src/common/constants/vendors.js":
/*!*****************************************!*\
  !*** ./src/common/constants/vendors.js ***!
  \*****************************************/
/*! exports provided: Vendors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vendors\", function() { return Vendors; });\nconst Vendors = [\r\n  { \"code\": \"SKT\", \"description\": \"SKT\" },\r\n  { \"code\": \"KT\", \"description\": \"KT\" },\r\n  { \"code\": \"LGT\", \"description\": \"LG U+\" },\r\n  { \"code\": \"SKTMVNO\", \"description\": \"SKT 알뜰폰\" },\r\n  { \"code\": \"KTMVNO\", \"description\": \"KT 알뜰폰\" },\r\n  { \"code\": \"LGTMVNO\", \"description\": \"LG U+ 알뜰폰\" },\r\n];\n\n//# sourceURL=webpack:///./src/common/constants/vendors.js?");

/***/ }),

/***/ "./src/common/utils/eventHandler.js":
/*!******************************************!*\
  !*** ./src/common/utils/eventHandler.js ***!
  \******************************************/
/*! exports provided: eventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventHandler\", function() { return eventHandler; });\n/* harmony import */ var _constants_vendors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/vendors */ \"./src/common/constants/vendors.js\");\n\r\n\r\nconst commonEvent = {\r\n  handleFocusToNextInputElement: (currElement) => {\r\n    const wrapperElement = currElement.parentElement.parentElement;\r\n    const nextWrapperElement = wrapperElement && wrapperElement.nextElementSibling;\r\n    const nextInputElement = nextWrapperElement && nextWrapperElement.childElementCount > 0 ? nextWrapperElement.querySelector('input') : null;\r\n  \r\n    if(nextInputElement) nextInputElement.focus();\r\n  }\r\n}\r\n\r\nconst vendorSelectEvent = {\r\n  // get data\r\n  setOptionElements: () => {\r\n    const venderSelectbox = document.querySelector('#vendors');\r\n    const venderOptions = _constants_vendors__WEBPACK_IMPORTED_MODULE_0__[\"Vendors\"].map(vender => (`<option value=${vender.code}>${vender.description}</option>`)).join('');\r\n    venderSelectbox.innerHTML = venderOptions;\r\n  },\r\n  // select change\r\n  changeValue: () => {\r\n    const vendorSelectElement = document.querySelector('#vendors');\r\n    // 통신사 선택 시, 다음 input으로 focus\r\n    vendorSelectElement.addEventListener('change', () => commonEvent.handleFocusToNextInputElement(vendorSelectElement));\r\n  }\r\n}\r\n\r\nconst eventHandler = () => {\r\n  vendorSelectEvent.setOptionElements();\r\n  vendorSelectEvent.changeValue();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/common/utils/eventHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils/eventHandler */ \"./src/common/utils/eventHandler.js\");\n\r\n\r\nconst init = () => {\r\n    Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"eventHandler\"])();\r\n}\r\n\r\ninit();\r\n\r\n\r\n\r\n// 동의 checkbox\r\n// 약관 데이터\r\nconst termsData = [\r\n    {\"termsId\": \"1\", \"title\": \"본인확인 이용동의\", \"required\": true}\r\n    ,{\"termsId\": \"2\", \"title\": \"개인 정보 수집/이용/취습 위탁동의\", \"required\": true}\r\n    ,{\"termsId\": \"3\", \"title\": \"고유식별번호 처리 동의\", \"required\": true}\r\n    ,{\"termsId\": \"4\", \"title\": \"(선택) 카카오 플러스 친구 추가 동의\", \"required\": false}\r\n]\r\n\r\n// 약관 데이터 checkbox 생성\r\nconst termsLis = termsData.map(term => (`<li><input type=\"checkbox\" value=${term.termsId}>${term.title}</li>`)).join('');\r\nconst termsUl = document.querySelector('#terms');\r\ntermsUl.innerHTML = termsLis;\r\n\r\nconst allAgree = document.querySelector('#allAgree');\r\n// 전체 동의 click event 생성\r\nallAgree.addEventListener('click', (e) => {\r\n    const checked = e.target.checked;\r\n    [...termsUl.children].map(li => li.children[0].checked = checked);\r\n});\r\n\r\n// 개별 약관 click event 생성\r\n[...termsUl.children].map(li => {\r\n    const checkbox = li.children[0];\r\n    checkbox.addEventListener('click', () => {\r\n        // 개별 약관 check 해제 시, 전체동의 check 해제\r\n        if(!checkbox.checked) allAgree.checked = false;\r\n    });\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 휴대폰 번호 input\r\n// const phoneNumberInput = document.querySelector('#phoneNumber');\r\n// phoneNumberInput.addEventListener('keyup', (e) => {\r\n//     console.log(e);\r\n//     const inputValue = e.target.value;\r\n//     if(inputValue.length > 0) {\r\n//         const keyValue = e.key;\r\n//         if(!Number(keyValue)) {\r\n//             // e.preventDefault();\r\n//             // e.defaultPrevented = true;\r\n//             phoneNumberInput.value = inputValue.replace(/[^0-9]/gi, '');\r\n//         } else if(inputValue.length === 3) {\r\n//             console.log('length 3');\r\n//             phoneNumberInput.value = inputValue + \" \";\r\n//         }\r\n//     }\r\n// });\r\n// phoneNumberInput.addEventListener('keyup', checkNumber);\r\n// function checkNumber(e) {\r\n//   console.log(e);\r\n//   const keyValue = e.key;\r\n//   if(!Number(keyValue)) {\r\n//     e.preventDefault();\r\n//     return false;\r\n//   }\r\n// }\r\n\r\n\r\n// 주민등록번호 input\r\n// const userSrnoInput = document.querySelector('#userSrno');\r\n// userSrnoInput.addEventListener('keyup', (e) => {\r\n//     const value = e.target.value;\r\n//     console.log(e.keyCode);\r\n//     console.log(value.length);\r\n//     if(value.length === 6) {\r\n//         console.log(value);\r\n//         userSrnoInput.value += \" - \";\r\n//     }\r\n//\r\n//     // userSrnoInput.value = value;\r\n//     console.log(userSrnoInput.value);\r\n// });\r\n\r\n\r\n// 이름 input\r\n// const userNmInput = document.querySelector('#userNm');\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });