import {
  handleFocusToNextInputElement,
  setCarrierOptionElements,
  setTermLiElements,
  clickAllTermsAgree,
  clickEachTermAgree,
  certify,
  checkNumberValueLength,
  checkNumberValue,
  formattingPhoneNumber,
  formattingRegisterNumber,
} from './common/utils/eventHandler';

import {
  replaceStrForRegex,
} from './common/utils/commonUtil';


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
  phoneNumberInputElement.addEventListener('keyup', (e) => {
    // 휴대폰번호 길이 체크
    checkNumberValueLength(e, phoneNumberInputElement, [10, 11]);
  });
  phoneNumberInputElement.addEventListener('keydown', (e) => {
    checkNumberValue(e);
  });
  phoneNumberInputElement.addEventListener('focusout', (e) => {
    checkNumberValueLength(e, phoneNumberInputElement, [10, 11]);
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
  registerNumberInputElement.addEventListener('keyup', (e) => {
    // 주민등록번호 길이 체크
    checkNumberValueLength(e, registerNumberInputElement, 7);
  });
  registerNumberInputElement.addEventListener('keydown', (e) => {
    checkNumberValue(e);
  });
  registerNumberInputElement.addEventListener('focusout', (e) => {
    checkNumberValueLength(e, registerNumberInputElement, 7);
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
  });
}



// 약관 ul element
const termUlElement = document.querySelector('#terms');
if(termUlElement) {
  setTermLiElements(termUlElement);
  termUlElement.addEventListener('click', () => clickEachTermAgree(termUlElement, allTermsAgreeCheckboxElement));
}

// 전체 동의 checkbox element
const allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');
if(allTermsAgreeCheckboxElement) {
  allTermsAgreeCheckboxElement.addEventListener('click', (e) => clickAllTermsAgree(e, termUlElement));
}


// 인증하기 element
const certifyButtonElement = document.querySelector('#certify');
if(certifyButtonElement) {
  const form = document.querySelector('form');
  certifyButtonElement.addEventListener('click', () => certify(form));
}
