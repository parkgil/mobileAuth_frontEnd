import {
  handleFocusToNextInputElement,
  setCarrierOptionElements,
  setTermLiElements,
  clickAllTermsAgree,
  clickEachTermAgree,
  clickCertify,
  checkNumberValueLength,
  checkNumberValue,
  formattingPhoneNumber,
  formattingRegisterNumber,
} from './common/utils/eventHandler';

import {
  replaceStrForRegex,
} from './common/utils/commonUtil';

const validationObject = {
  get isValidPhoneNumber() {
    console.log('get : ' + this._isValidPhoneNumber);
    return this._isValidPhoneNumber;
  },
  set isValidPhoneNumber(isValidPhoneNumber) {
    console.log('set : ' + isValidPhoneNumber);
    this._isValidPhoneNumber = isValidPhoneNumber;
    this.isValidAll;
  },
  get isValidRegisterNumber() {
    console.log('get : ' + this._isValidRegisterNumber);
    return this._isValidRegisterNumber;
  },
  set isValidRegisterNumber(isValidRegisterNumber) {
    console.log('set : ' + isValidRegisterNumber);
    this._isValidRegisterNumber = isValidRegisterNumber;
    this.isValidAll;
  },
  get isValidName() {
    console.log('get : ' + this._isValidName);
    return this._isValidName;
  },
  set isValidName(isValidName) {
    console.log('set : ' + isValidName);
    this._isValidName = isValidName;
    this.isValidAll;
  },
  get isValidTerm() {
    console.log('get : ' + this._isValidTerm);
    return this._isValidTerm;
  },
  set isValidTerm(isValidTerm) {
    console.log('set : ' + isValidTerm);
    this._isValidTerm = isValidTerm;
    this.isValidAll;
  },
  get isValidAll() {
    if((this._isValidPhoneNumber && this._isValidRegisterNumber && this._isValidName && this._isValidTerm) && certifyButtonElement) {
      certifyButtonElement.disabled = false;
      certifyButtonElement.classList.add('active');
    } else {
      certifyButtonElement.disabled = true;
      certifyButtonElement.classList.remove('active');
    }
  }
}

// 통신사 select element
const carrierSelectElement = document.querySelector('#carrier');
if(carrierSelectElement) {
  // 통신사 option element 설정
  setCarrierOptionElements(carrierSelectElement);
  // 통신사 selectbox change 이벤트: 다음 input으로 포커스 이동
  carrierSelectElement.addEventListener('change', () => handleFocusToNextInputElement(carrierSelectElement));
}



// 휴대폰번호 input element
const phoneNumberInputElement = document.querySelector('#phoneNumber');
if(phoneNumberInputElement) {
  // 휴대폰번호 keyup event
  phoneNumberInputElement.addEventListener('keyup', e => {
    // 휴대폰번호 길이 체크
    validationObject.isValidPhoneNumber = checkNumberValueLength(e, phoneNumberInputElement, [10, 11]);
  });
  phoneNumberInputElement.addEventListener('keydown', e => checkNumberValue(e));
  phoneNumberInputElement.addEventListener('focusout', e => {
    validationObject.isValidPhoneNumber = checkNumberValueLength(e, phoneNumberInputElement, [10, 11]);
    formattingPhoneNumber(phoneNumberInputElement);
  });
  phoneNumberInputElement.addEventListener('focusin', () => {
    const trimInputValue = replaceStrForRegex(phoneNumberInputElement.value, /(\s*)/g);
    if(trimInputValue) phoneNumberInputElement.value = trimInputValue;
  });
}



// 주민등록번호 input element
const registerNumberInputElement = document.querySelector('#registerNumber');
if(registerNumberInputElement) {
  registerNumberInputElement.addEventListener('keyup', e => {
    // 주민등록번호 길이 체크
    validationObject.isValidRegisterNumber = checkNumberValueLength(e, registerNumberInputElement, 7);
  });
  registerNumberInputElement.addEventListener('keydown', e => {
    checkNumberValue(e);
  });
  registerNumberInputElement.addEventListener('focusout', e => {
    validationObject.isValidRegisterNumber = checkNumberValueLength(e, registerNumberInputElement, 7);
    formattingRegisterNumber(registerNumberInputElement);
  });
  registerNumberInputElement.addEventListener('focusin', () => {
    const trimInputValue = replaceStrForRegex(registerNumberInputElement.value, /\-/g);

    if(trimInputValue) registerNumberInputElement.value = trimInputValue;
  });
}



// 이름 input element
const nameInputElement = document.querySelector('#name');
if(nameInputElement) {
  nameInputElement.addEventListener('keydown', () => {
    const trimInputValue = replaceStrForRegex(nameInputElement.value, /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g);
    nameInputElement.value = trimInputValue;
    validationObject.isValidName = nameInputElement.value.length > 0;
  });
}



// 약관 ul element
const termUlElement = document.querySelector('#terms');
if(termUlElement) {
  setTermLiElements(termUlElement);
  termUlElement.addEventListener('click', () => {
    const nonCheckedTerms = clickEachTermAgree(termUlElement, allTermsAgreeCheckboxElement).map(term => term.value);
    validationObject.isValidTerm = !nonCheckedTerms.includes("1") && !nonCheckedTerms.includes("2") && !nonCheckedTerms.includes("3");
  });
}

// 전체 동의 checkbox element
const allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');
if(allTermsAgreeCheckboxElement) {
  allTermsAgreeCheckboxElement.addEventListener('click', e => {
    validationObject.isValidTerm = clickAllTermsAgree(e, termUlElement);
  });
}


// 인증하기 element
const certifyButtonElement = document.querySelector('#certify');
if(certifyButtonElement) {
  const form = document.querySelector('form');
  if(form) certifyButtonElement.addEventListener('click', () => clickCertify(form));
}
