require('../css/style.css');
import {
  setCarrierOptionElements,
  handleChangeCarrierSelectElement,

  handleKeyUpPhoneNumberInputElement,
  handleKeyDownPhoneNumberInputElement,
  handleFocusOutPhoneNumberInputElement,
  handleFocusInPhoneNumberInputElement,

  handleKeyUpRegisterNumberInputElement,
  handleKeyDownRegisterNumberInputElement,
  handleFocusOutRegisterNumberInputElement,
  handleFocusInRegisterNumberInputElement,

  handleKeyDownNameInputElement,

  setTermLiElements,
  handleClickEachTermAgreeElement,
  handleClickAllTermsAgreeElement,

  handleClickCertifyButtonElement,
} from './utils/eventHandler';

const validationObject = {
  get isValidPhoneNumber() {
    return this._isValidPhoneNumber;
  },
  set isValidPhoneNumber(isValidPhoneNumber) {
    this._isValidPhoneNumber = isValidPhoneNumber;
    this.isValidAll;
  },
  get isValidRegisterNumber() {
    return this._isValidRegisterNumber;
  },
  set isValidRegisterNumber(isValidRegisterNumber) {
    this._isValidRegisterNumber = isValidRegisterNumber;
    this.isValidAll;
  },
  get isValidName() {
    return this._isValidName;
  },
  set isValidName(isValidName) {
    this._isValidName = isValidName;
    this.isValidAll;
  },
  get isValidTerm() {
    return this._isValidTerm;
  },
  set isValidTerm(isValidTerm) {
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
  // 통신사 option change eventListener 추가
  carrierSelectElement.addEventListener('change', () => handleChangeCarrierSelectElement(carrierSelectElement));
}



// 휴대폰번호 input element
const phoneNumberInputElement = document.querySelector('#phoneNumber');
if(phoneNumberInputElement) {
  // 휴대폰번호 input keyup eventListener 추가
  phoneNumberInputElement.addEventListener('keyup', e => {
    validationObject.isValidPhoneNumber = handleKeyUpPhoneNumberInputElement(e, phoneNumberInputElement);
  });
  // 휴대폰번호 input keydown eventListener 추가
  phoneNumberInputElement.addEventListener('keydown', e => handleKeyDownPhoneNumberInputElement(e));
  // 휴대폰번호 input focusout eventListener 추가
  phoneNumberInputElement.addEventListener('focusout', e => {
    validationObject.isValidPhoneNumber = handleFocusOutPhoneNumberInputElement(e, phoneNumberInputElement);
  });
  // 휴대폰번호 input focusin eventListener 추가
  phoneNumberInputElement.addEventListener('focusin', () => handleFocusInPhoneNumberInputElement(phoneNumberInputElement));
}



// 주민등록번호 input element
const registerNumberInputElement = document.querySelector('#registerNumber');
if(registerNumberInputElement) {
  // 주민등록번호 input keyup eventListener 추가
  registerNumberInputElement.addEventListener('keyup', e => {
    validationObject.isValidRegisterNumber = handleKeyUpRegisterNumberInputElement(e, registerNumberInputElement);
  });
  // 주민등록번호 input keydown eventListener 추가
  registerNumberInputElement.addEventListener('keydown', e => handleKeyDownRegisterNumberInputElement(e));
  // 주민등록번호 input focusout eventListener 추가
  registerNumberInputElement.addEventListener('focusout', e => {
    validationObject.isValidRegisterNumber = handleFocusOutRegisterNumberInputElement(e, registerNumberInputElement);
  });
  // 주민등록번호 input focusin eventListener 추가
  registerNumberInputElement.addEventListener('focusin', () => handleFocusInRegisterNumberInputElement(registerNumberInputElement));
}



// 이름 input element
const nameInputElement = document.querySelector('#name');
if(nameInputElement) {
  // 이 input keydown eventListener 추가
  nameInputElement.addEventListener('keydown', () => {
    validationObject.isValidName = handleKeyDownNameInputElement(nameInputElement);
  });
}


// 약관 ul element
const termUlElement = document.querySelector('#terms');
if(termUlElement) {
  // 약관 li element 설
  setTermLiElements(termUlElement);
  const termCheckboxElements = Array.from(document.querySelectorAll('input[type="checkbox"][name="termCheckbox"]'));
  termCheckboxElements.map(checkbox => {
    checkbox.addEventListener('click', () => {
      validationObject.isValidTerm = handleClickEachTermAgreeElement(termCheckboxElements, allTermsAgreeCheckboxElement);
    });
  })
}
// 전체 동의 checkbox element
const allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');
if(allTermsAgreeCheckboxElement) {
  allTermsAgreeCheckboxElement.addEventListener('click', e => {
    validationObject.isValidTerm = handleClickAllTermsAgreeElement(e, termUlElement);
  });
}


// 인증하기 element
const certifyButtonElement = document.querySelector('#certify');
if(certifyButtonElement) {
  const form = document.querySelector('form');
  if(form) certifyButtonElement.addEventListener('click', () => handleClickCertifyButtonElement(form));
}
