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
  removeAllWhiteSpace,
  removeAllHyphen
} from './common/utils/commonUtil';


// 통신사 select element
const carrierSelectElement = document.querySelector('#carrier');
// 통신사 option element 설정
setCarrierOptionElements(carrierSelectElement);
// 통신사 selectbox change 이벤트: 다음 input으로 포커스 이동
carrierSelectElement.addEventListener('change', () => handleFocusToNextInputElement(carrierSelectElement));


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
    const trimInputValue = removeAllWhiteSpace(phoneNumberInputElement.value);
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
    const trimInputValue = removeAllHyphen(registerNumberInputElement.value);
    if(trimInputValue) registerNumberInputElement.value = trimInputValue;
  });
}



// 이름 input element
const nameInput = document.querySelector('#name');
nameInput.addEventListener('keyup', (e) => {});


// 약관 ul element
const termUlElement = document.querySelector('#terms');
setTermLiElements(termUlElement);
termUlElement.addEventListener('click', () => clickEachTermAgree(termUlElement, allTermsAgreeCheckboxElement));

// 전체 동의 checkbox element
const allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');
allTermsAgreeCheckboxElement.addEventListener('click', (e) => clickAllTermsAgree(e, termUlElement));


// 인증하기 element
const certifyButtonElement = document.querySelector('#certify');
const form = document.querySelector('form');
certifyButtonElement.addEventListener('click', () => certify(form));