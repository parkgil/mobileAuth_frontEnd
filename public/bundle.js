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

/***/ "./src/common/constants/carriers.js":
/*!******************************************!*\
  !*** ./src/common/constants/carriers.js ***!
  \******************************************/
/*! exports provided: Carriers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Carriers\", function() { return Carriers; });\nconst Carriers = [\n  { \"code\": \"SKT\", \"description\": \"SKT\" },\n  { \"code\": \"KT\", \"description\": \"KT\" },\n  { \"code\": \"LGT\", \"description\": \"LG U+\" },\n  { \"code\": \"SKTMVNO\", \"description\": \"SKT 알뜰폰\" },\n  { \"code\": \"KTMVNO\", \"description\": \"KT 알뜰폰\" },\n  { \"code\": \"LGTMVNO\", \"description\": \"LG U+ 알뜰폰\" },\n];\n\n//# sourceURL=webpack:///./src/common/constants/carriers.js?");

/***/ }),

/***/ "./src/common/constants/terms.js":
/*!***************************************!*\
  !*** ./src/common/constants/terms.js ***!
  \***************************************/
/*! exports provided: Terms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Terms\", function() { return Terms; });\nconst Terms = [\n  {\"termsId\": \"1\", \"title\": \"본인확인 이용동의\", \"required\": true},\n  {\"termsId\": \"2\", \"title\": \"개인 정보 수집/이용/취습 위탁동의\", \"required\": true},\n  {\"termsId\": \"3\", \"title\": \"고유식별번호 처리 동의\", \"required\": true},\n  {\"termsId\": \"4\", \"title\": \"(선택) 카카오 플러스 친구 추가 동의\", \"required\": false},\n]\n\n//# sourceURL=webpack:///./src/common/constants/terms.js?");

/***/ }),

/***/ "./src/common/utils/commonUtil.js":
/*!****************************************!*\
  !*** ./src/common/utils/commonUtil.js ***!
  \****************************************/
/*! exports provided: replaceStrForRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceStrForRegex\", function() { return replaceStrForRegex; });\nconst replaceStrForRegex = (str, regex) => {\n  return str && str.replace(regex, '');\n}\n\n//# sourceURL=webpack:///./src/common/utils/commonUtil.js?");

/***/ }),

/***/ "./src/common/utils/eventHandler.js":
/*!******************************************!*\
  !*** ./src/common/utils/eventHandler.js ***!
  \******************************************/
/*! exports provided: handleFocusToNextInputElement, checkFulfiledInputLength, setCarrierOptionElements, checkNumberValueLength, checkNumberValue, formattingPhoneNumber, formattingRegisterNumber, setTermLiElements, clickAllTermsAgree, clickEachTermAgree, clickCertify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleFocusToNextInputElement\", function() { return handleFocusToNextInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkFulfiledInputLength\", function() { return checkFulfiledInputLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCarrierOptionElements\", function() { return setCarrierOptionElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNumberValueLength\", function() { return checkNumberValueLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNumberValue\", function() { return checkNumberValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formattingPhoneNumber\", function() { return formattingPhoneNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formattingRegisterNumber\", function() { return formattingRegisterNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTermLiElements\", function() { return setTermLiElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickAllTermsAgree\", function() { return clickAllTermsAgree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickEachTermAgree\", function() { return clickEachTermAgree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickCertify\", function() { return clickCertify; });\n/* harmony import */ var _constants_carriers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/carriers */ \"./src/common/constants/carriers.js\");\n/* harmony import */ var _constants_terms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/terms */ \"./src/common/constants/terms.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ \"./src/common/utils/validator.js\");\n\n\n\n\n// 다음 항목으로 포커스 이동\nconst handleFocusToNextInputElement = (currElement) => {\n  const wrapperElement = currElement && currElement.parentElement.parentElement;\n  const nextWrapperElement = wrapperElement && wrapperElement.nextElementSibling;\n  const nextInputElement = nextWrapperElement && nextWrapperElement.childElementCount > 0 ? nextWrapperElement.querySelector('input') : null;\n\n  if(nextInputElement) nextInputElement.focus();\n}\n\n// input 길이 다채운 경우\nconst checkFulfiledInputLength = (e, maxLength) => e.target.value.length === maxLength;\n\nconst addSpecialSyntaxForFormat = (value, loc, syntax) => {\n  let result = '';\n  const valueLength = value && value.length;\n  if(valueLength && loc && syntax) {\n    if(typeof loc === \"object\" && loc.length > 0) {\n      let locArrStartIndex = 0;\n      loc.map(locNum => {\n        result += value.substring(locArrStartIndex, locNum) + syntax;\n        locArrStartIndex = locNum;\n      });\n      result += value.substring(locArrStartIndex, valueLength);\n    } else if(Number(loc) > 0) {\n      result = value.substring(0, loc) + syntax + value.substring(loc, valueLength);\n    }\n  }\n  return result;\n}\n\n// 통신사 option element 설정\nconst setCarrierOptionElements = (carrierSelectElement) => {\n  const carrierOptions = _constants_carriers__WEBPACK_IMPORTED_MODULE_0__[\"Carriers\"].map(carrier => (`<option value=${carrier.code}>${carrier.description}</option>`)).join('');\n  carrierSelectElement.innerHTML = carrierOptions;\n}\n\n// 숫자값 길이 체크 : keydown\nconst checkNumberValueLength = (e, element, standardLength) => {\n  const inputValue = e.target.value;\n  if(Object(_validator__WEBPACK_IMPORTED_MODULE_2__[\"checkInputLength\"])(inputValue, standardLength)) {\n    const maxLength = typeof standardLength === 'object' ? standardLength[standardLength.length - 1] : standardLength;\n    checkFulfiledInputLength(e, maxLength) && handleFocusToNextInputElement(element);\n    // error class 제거\n    element && element.classList.remove('error');\n    return true;\n\n  } else {\n    e.type === 'focusout' && element && (inputValue.length === 0\n      ? element.classList.remove('error')\n      : element.classList.add('error'));\n\n    return false;\n  }\n}\n\n// 숫자 값 체크\nconst checkNumberValue = e => {\n  if(!Object(_validator__WEBPACK_IMPORTED_MODULE_2__[\"checkNumberFormat\"])(e)) {\n    e.preventDefault();\n  }\n}\n\n// 휴대폰 번호 input format(스페이스바 삽입) : focusout\nconst formattingPhoneNumber = (phoneNumberInput) => {\n  // 10자리인 경우 3,6 사이 space, 11자리인 경우 3, 7 사이 space 추\n  const PHONE_NUMBER_MIN_LENGTH = 10;\n  const FIRST_PHONE_NUMBER_BASE_POINT = 3;\n  const SECOND_PHONE_NUMBER_BASE_POINT = 6;\n  const THIRD_PHONE_NUMBER_BASE_POINT = 7;\n  const phoneNumberInputLength = phoneNumberInput && phoneNumberInput.value.length;\n\n  if(phoneNumberInputLength >= PHONE_NUMBER_MIN_LENGTH) {\n    const loc = (phoneNumberInputLength === PHONE_NUMBER_MIN_LENGTH)\n      ? [FIRST_PHONE_NUMBER_BASE_POINT, SECOND_PHONE_NUMBER_BASE_POINT]\n      : [FIRST_PHONE_NUMBER_BASE_POINT, THIRD_PHONE_NUMBER_BASE_POINT];\n    const currPhoneNumber = phoneNumberInput.value;\n    phoneNumberInput.value = addSpecialSyntaxForFormat(currPhoneNumber, loc, ' ') || currPhoneNumber;\n  }\n}\n\n// 주민등록 번호 input format(- 삽입)\nconst formattingRegisterNumber = (registerNumberInput) => {\n  const REGISTER_NUMBER_STANDARD = 7;\n  const REGISTER_NUMBER_BASE_POINT = 6;\n  const registerNumberInputLength = registerNumberInput && registerNumberInput.value.length;\n  if(registerNumberInputLength === REGISTER_NUMBER_STANDARD) {\n    const currRegisterNumber = registerNumberInput.value;\n    registerNumberInput.value = addSpecialSyntaxForFormat(currRegisterNumber, REGISTER_NUMBER_BASE_POINT, '-') || currRegisterNumber;\n  }\n}\n// 이름 input validation check(validator.js)에 작성 : keydown\n\n\n// 약관 li element 설정\nconst setTermLiElements = (termUlElement) => {\n  const termsLis = _constants_terms__WEBPACK_IMPORTED_MODULE_1__[\"Terms\"].map(term => (\n    `<li>\n        <input id=${'term' + term.termsId} type=\"checkbox\" value=${term.termsId}>\n        <label id=${'termLabel' + term.termsId} for=${'term' + term.termsId}>${term.title}</label>\n     </li>`\n  )).join('');\n\n  termUlElement.innerHTML = termsLis;\n}\n\n// 전체동의 클릭\nconst clickAllTermsAgree = (e, termUlElement) => {\n  const checked = e.target.checked;\n  const termLiElements = Array.from(termUlElement.children || []) ;\n  termLiElements.map(li => li.children[0].checked = checked);\n\n  return checked && termLiElements.length > 0;\n}\n\n// 약관 checkbox 클릭 이벤트\nconst clickEachTermAgree = (termUlElement, allTermsAgreeCheckboxElement) => {\n  const termLiElements = Array.from(termUlElement.children || []);\n  const nonCheckedTerms = termLiElements.filter(li => !li.children[0].checked).map(li => li.querySelector('input[type=\"checkbox\"]'));\n  allTermsAgreeCheckboxElement.checked = nonCheckedTerms.length === 0;\n\n  return nonCheckedTerms;\n}\n\n\nconst clickCertify = (form) => {\n  let result = {name: null, registerNumber: null, carrierCode: null, phoneNumber: null, termsCode: null};\n\n  // 통신사\n  const carrierCode = form.querySelector('#carrier').value;\n  result.carrierCode = carrierCode;\n\n  // input(휴대폰번호, 주민등록번호, 이름)\n  const inputElements = Array.from(form.querySelectorAll('input[type=\"text\"]'));\n  inputElements.map(inputElement => {\n    result[inputElement.id] = inputElement.value;\n  });\n  \n  // 약관\n  let termsCode = form.querySelector('#allTermAgree:checked') ? [\"1\", \"2\", \"3\", \"4\"] : null;\n  if(!termsCode) {\n    const termElements = Array.from(form.querySelectorAll('input[type=\"checkbox\"]:not(#allTermAgree):checked'));\n    termsCode = termElements.map(term => term.value);\n  }\n  result.termsCode = termsCode;\n\n  // 결과 출력\n  console.log(result);\n}\n\n//# sourceURL=webpack:///./src/common/utils/eventHandler.js?");

/***/ }),

/***/ "./src/common/utils/validator.js":
/*!***************************************!*\
  !*** ./src/common/utils/validator.js ***!
  \***************************************/
/*! exports provided: checkInputLength, checkNumberFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInputLength\", function() { return checkInputLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNumberFormat\", function() { return checkNumberFormat; });\nconst checkInputLength = (value, demandedLength) => {\n  const valueLength = value && value.length;\n  if(valueLength && demandedLength) {\n    // demandedLength가 array형태일 경우\n    if(typeof demandedLength === 'object' && demandedLength.length > 0) {\n      const resultArr = demandedLength.map(length => length === valueLength);\n      if(resultArr.includes(true)) return true;\n\n    // demandedLength가 자연수일 경우\n    } else if(Number(demandedLength) > 0) {\n      return valueLength === demandedLength;\n    }\n  }\n\n  return false;\n}\n\n\nconst checkNumberFormat = e => {\n  const BACK_SPACE_KEY_CODE = 8;\n  const TAB_KEY_CODE = 9;\n  const LEFT_ARROW_KEY_CODE = 37;\n  const RIGHT_ARROW_KEY_CODE = 39;\n\n  const currKey = e.key;\n  const currKeyCode = e.keyCode;\n  if(Number(currKey) >= 0 || [BACK_SPACE_KEY_CODE, TAB_KEY_CODE, LEFT_ARROW_KEY_CODE, RIGHT_ARROW_KEY_CODE].includes(currKeyCode)) {\n    return true;\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack:///./src/common/utils/validator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils/eventHandler */ \"./src/common/utils/eventHandler.js\");\n/* harmony import */ var _common_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/commonUtil */ \"./src/common/utils/commonUtil.js\");\n\n\n\n\nconst validationObject = {\n  get isValidPhoneNumber() {\n    console.log('get : ' + this._isValidPhoneNumber);\n    return this._isValidPhoneNumber;\n  },\n  set isValidPhoneNumber(isValidPhoneNumber) {\n    console.log('set : ' + isValidPhoneNumber);\n    this._isValidPhoneNumber = isValidPhoneNumber;\n    this.isValidAll;\n  },\n  get isValidRegisterNumber() {\n    console.log('get : ' + this._isValidRegisterNumber);\n    return this._isValidRegisterNumber;\n  },\n  set isValidRegisterNumber(isValidRegisterNumber) {\n    console.log('set : ' + isValidRegisterNumber);\n    this._isValidRegisterNumber = isValidRegisterNumber;\n    this.isValidAll;\n  },\n  get isValidName() {\n    console.log('get : ' + this._isValidName);\n    return this._isValidName;\n  },\n  set isValidName(isValidName) {\n    console.log('set : ' + isValidName);\n    this._isValidName = isValidName;\n    this.isValidAll;\n  },\n  get isValidTerm() {\n    console.log('get : ' + this._isValidTerm);\n    return this._isValidTerm;\n  },\n  set isValidTerm(isValidTerm) {\n    console.log('set : ' + isValidTerm);\n    this._isValidTerm = isValidTerm;\n    this.isValidAll;\n  },\n  get isValidAll() {\n    if((this._isValidPhoneNumber && this._isValidRegisterNumber && this._isValidName && this._isValidTerm) && certifyButtonElement) {\n      certifyButtonElement.disabled = false;\n      certifyButtonElement.classList.add('active');\n    } else {\n      certifyButtonElement.disabled = true;\n      certifyButtonElement.classList.remove('active');\n    }\n  }\n}\n\n// 통신사 select element\nconst carrierSelectElement = document.querySelector('#carrier');\nif(carrierSelectElement) {\n  // 통신사 option element 설정\n  Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"setCarrierOptionElements\"])(carrierSelectElement);\n  // 통신사 selectbox change 이벤트: 다음 input으로 포커스 이동\n  carrierSelectElement.addEventListener('change', () => Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"handleFocusToNextInputElement\"])(carrierSelectElement));\n}\n\n\n\n// 휴대폰번호 input element\nconst phoneNumberInputElement = document.querySelector('#phoneNumber');\nif(phoneNumberInputElement) {\n  // 휴대폰번호 keyup event\n  phoneNumberInputElement.addEventListener('keyup', e => {\n    // 휴대폰번호 길이 체크\n    validationObject.isValidPhoneNumber = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValueLength\"])(e, phoneNumberInputElement, [10, 11]);\n  });\n  phoneNumberInputElement.addEventListener('keydown', e => Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValue\"])(e));\n  phoneNumberInputElement.addEventListener('focusout', e => {\n    validationObject.isValidPhoneNumber = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValueLength\"])(e, phoneNumberInputElement, [10, 11]);\n    Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"formattingPhoneNumber\"])(phoneNumberInputElement);\n  });\n  phoneNumberInputElement.addEventListener('focusin', () => {\n    const trimInputValue = Object(_common_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__[\"replaceStrForRegex\"])(phoneNumberInputElement.value, /(\\s*)/g);\n    if(trimInputValue) phoneNumberInputElement.value = trimInputValue;\n  });\n}\n\n\n\n// 주민등록번호 input element\nconst registerNumberInputElement = document.querySelector('#registerNumber');\nif(registerNumberInputElement) {\n  registerNumberInputElement.addEventListener('keyup', e => {\n    // 주민등록번호 길이 체크\n    validationObject.isValidRegisterNumber = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValueLength\"])(e, registerNumberInputElement, 7);\n  });\n  registerNumberInputElement.addEventListener('keydown', e => {\n    Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValue\"])(e);\n  });\n  registerNumberInputElement.addEventListener('focusout', e => {\n    validationObject.isValidRegisterNumber = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"checkNumberValueLength\"])(e, registerNumberInputElement, 7);\n    Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"formattingRegisterNumber\"])(registerNumberInputElement);\n  });\n  registerNumberInputElement.addEventListener('focusin', () => {\n    const trimInputValue = Object(_common_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__[\"replaceStrForRegex\"])(registerNumberInputElement.value, /\\-/g);\n\n    if(trimInputValue) registerNumberInputElement.value = trimInputValue;\n  });\n}\n\n\n\n// 이름 input element\nconst nameInputElement = document.querySelector('#name');\nif(nameInputElement) {\n  nameInputElement.addEventListener('keydown', () => {\n    const trimInputValue = Object(_common_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__[\"replaceStrForRegex\"])(nameInputElement.value, /[a-z0-9]|[ \\[\\]{}()<>?|`~!@#$%^&*-_+=,.;:\\\"'\\\\]/g);\n    nameInputElement.value = trimInputValue;\n    validationObject.isValidName = nameInputElement.value.length > 0;\n  });\n}\n\n\n\n// 약관 ul element\nconst termUlElement = document.querySelector('#terms');\nif(termUlElement) {\n  Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"setTermLiElements\"])(termUlElement);\n  termUlElement.addEventListener('click', () => {\n    const nonCheckedTerms = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"clickEachTermAgree\"])(termUlElement, allTermsAgreeCheckboxElement).map(term => term.value);\n    validationObject.isValidTerm = !nonCheckedTerms.includes(\"1\") && !nonCheckedTerms.includes(\"2\") && !nonCheckedTerms.includes(\"3\");\n  });\n}\n\n// 전체 동의 checkbox element\nconst allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');\nif(allTermsAgreeCheckboxElement) {\n  allTermsAgreeCheckboxElement.addEventListener('click', e => {\n    validationObject.isValidTerm = Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"clickAllTermsAgree\"])(e, termUlElement);\n  });\n}\n\n\n// 인증하기 element\nconst certifyButtonElement = document.querySelector('#certify');\nif(certifyButtonElement) {\n  const form = document.querySelector('form');\n  if(form) certifyButtonElement.addEventListener('click', () => Object(_common_utils_eventHandler__WEBPACK_IMPORTED_MODULE_0__[\"clickCertify\"])(form));\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });