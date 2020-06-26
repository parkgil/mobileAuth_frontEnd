import {
  handleFocusToNextInputElement,
  setCarrierOptionElements,
  setTermLiElements,
  clickAllTermsAgree,
  clickEachTermAgree,
  handleFullInputLength,
  certify,
  checkPhoneNumberLength,
  checkNumberValue,
  formattingPhoneNumber,
} from './common/utils/eventHandler';

import {
  removeSpace
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
    checkPhoneNumberLength(e, phoneNumberInputElement);
  });
  phoneNumberInputElement.addEventListener('keydown', (e) => {
    checkNumberValue(e);
  });
  phoneNumberInputElement.addEventListener('focusout', (e) => {
    checkPhoneNumberLength(e, phoneNumberInputElement);
    formattingPhoneNumber(phoneNumberInputElement);
  });
  phoneNumberInputElement.addEventListener('focusin', () => {
    const trimInputValue = removeSpace(phoneNumberInputElement.value).replace(/(\s*)/g, '');
    if(trimInputValue) phoneNumberInputElement.value = trimInputValue;
  });
}



// 주민등록번호 input element
const registerNumberInputElement = document.querySelector('#registerNumber');
registerNumberInputElement.addEventListener('keyup', (e) => {
  handleFullInputLength(e, 7, registerNumberInputElement);
});
registerNumberInputElement.addEventListener('keydown', (e) => {
  checkNumberValue(e);
})


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