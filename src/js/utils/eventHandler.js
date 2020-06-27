import { Carriers } from '../constants/carriers';
import { Terms } from '../constants/terms';
import {
  checkNumberFormat,
} from './validator'
import {
  addSpecialSyntaxForFormat,
  replaceStrForRegex,
  handleFocusToNextInputElement,
  checkNumberValueLength,
} from './commonUtil';

// 통신사 option element 설정
export const setCarrierOptionElements = (carrierSelectElement) => {
  const carrierOptions = Carriers.map(carrier => (`<option value=${carrier.code}>${carrier.description}</option>`)).join('');
  carrierSelectElement.innerHTML = carrierOptions;
}

// 약관 li element 설정
export const setTermLiElements = (termUlElement) => {
  const termsLis = Terms.map(term => (
    `<li>
        <input id=${'term' + term.termsId} name="termCheckbox" type="checkbox" value=${term.termsId}>
        <label id=${'termLabel' + term.termsId} for=${'term' + term.termsId}>${term.title}</label>
     </li>`
  )).join('');

  termUlElement.innerHTML = termsLis;
}

export const handleChangeCarrierSelectElement = (carrierSelectElement) => {
  handleFocusToNextInputElement(carrierSelectElement);
}

const PHONE_NUMBER_STANDARD_NUM_ARRAY = [10, 11];
const PHONE_NUMBER_MAX_LENGTH = 11;
export const handleKeyUpPhoneNumberInputElement = (e, phoneNumberInputElement) => {
  return checkNumberValueLength(e, phoneNumberInputElement, PHONE_NUMBER_STANDARD_NUM_ARRAY);
}

export const handleKeyDownPhoneNumberInputElement = e => {
  if(!checkNumberFormat(e)) {
    e.preventDefault();
  }
}

export const handleFocusOutPhoneNumberInputElement = (e, phoneNumberInputElement) => {
  const isValidValue = checkNumberValueLength(e, phoneNumberInputElement, PHONE_NUMBER_STANDARD_NUM_ARRAY);
  if(isValidValue) {
    phoneNumberInputElement.maxLength = PHONE_NUMBER_MAX_LENGTH + 2;
    phoneNumberInputElement.value = formattingPhoneNumber(phoneNumberInputElement);
  }

  return isValidValue;
}

// 휴대폰 번호 input format(스페이스바 삽입) : focusout
const formattingPhoneNumber = (phoneNumberInput) => {
  // 10자리인 경우 3,6 사이 space, 11자리인 경우 3, 7 사이 space 추가
  const PHONE_NUMBER_MIN_LENGTH = 10;
  const FIRST_PHONE_NUMBER_BASE_POINT = 3;
  const SECOND_PHONE_NUMBER_BASE_POINT = 6;
  const THIRD_PHONE_NUMBER_BASE_POINT = 7;
  const phoneNumberInputLength = phoneNumberInput && phoneNumberInput.value.length;
  const oriPhoneNumber = phoneNumberInput.value;

  const loc = (phoneNumberInputLength === PHONE_NUMBER_MIN_LENGTH)
    ? [FIRST_PHONE_NUMBER_BASE_POINT, SECOND_PHONE_NUMBER_BASE_POINT]
    : [FIRST_PHONE_NUMBER_BASE_POINT, THIRD_PHONE_NUMBER_BASE_POINT];

  return addSpecialSyntaxForFormat(oriPhoneNumber, loc, ' ') || oriPhoneNumber;
}

export const handleFocusInPhoneNumberInputElement = (phoneNumberInputElement) => {
  const trimInputValue = replaceStrForRegex(phoneNumberInputElement.value, /(\s*)/g);
  if(trimInputValue) {
    phoneNumberInputElement.maxLength = PHONE_NUMBER_MAX_LENGTH;
    phoneNumberInputElement.value = trimInputValue;
  }
}

const REGISTER_NUMBER_MAX_LENGTH = 7;
export const handleKeyUpRegisterNumberInputElement = (e, registerNumberInputElement) => {
  return checkNumberValueLength(e, registerNumberInputElement, REGISTER_NUMBER_MAX_LENGTH);
}

export const handleKeyDownRegisterNumberInputElement = e => {
  if(!checkNumberFormat(e)) {
    e.preventDefault();
  }
}

export const handleFocusOutRegisterNumberInputElement = (e, registerNumberInputElement) => {
  const isValidValue = checkNumberValueLength(e, registerNumberInputElement, REGISTER_NUMBER_MAX_LENGTH);
  if(isValidValue) {
    registerNumberInputElement.maxLength = REGISTER_NUMBER_MAX_LENGTH + 1;
    registerNumberInputElement.value = formattingRegisterNumber(registerNumberInputElement);
  }

  return isValidValue;
}

// 주민등록 번호 input format(- 삽입)
const formattingRegisterNumber = (registerNumberInput) => {
  const REGISTER_NUMBER_BASE_POINT = 6;
  const currRegisterNumber = registerNumberInput.value;

  return addSpecialSyntaxForFormat(currRegisterNumber, REGISTER_NUMBER_BASE_POINT, '-') || currRegisterNumber;
}

export const handleFocusInRegisterNumberInputElement = (registerNumberInputElement) => {
  const trimInputValue = replaceStrForRegex(registerNumberInputElement.value, /\-/g);
  if(trimInputValue) {
    registerNumberInputElement.maxLength = REGISTER_NUMBER_MAX_LENGTH;
    registerNumberInputElement.value = trimInputValue;
  }
}

export const handleKeyDownNameInputElement = (nameInputElement) => {
  const trimInputValue = replaceStrForRegex(nameInputElement.value, /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g);
  nameInputElement.value = trimInputValue;

  return trimInputValue.length > 0;
}

export const handleClickEachTermAgreeElement = (termCheckboxElements, allTermsAgreeCheckboxElement) => {
  const nonCheckedTerms = clickEachTermAgree(termCheckboxElements, allTermsAgreeCheckboxElement).map(term => term.value);

  return !nonCheckedTerms.includes("1") && !nonCheckedTerms.includes("2") && !nonCheckedTerms.includes("3");
}

// 약관 checkbox 클릭 이벤트
const clickEachTermAgree = (termCheckboxElements, allTermsAgreeCheckboxElement) => {
  const nonCheckedTerms = Array.from(termCheckboxElements || []).filter(li => !li.checked);
  allTermsAgreeCheckboxElement.checked = nonCheckedTerms.length === 0;

  return nonCheckedTerms;
}

export const handleClickAllTermsAgreeElement = (e, termUlElement) => {
  const checked = e.target.checked;
  const termLiElements = Array.from(termUlElement.children || []) ;
  termLiElements.map(li => li.children[0].checked = checked);

  return checked && termLiElements.length > 0;
}

export const handleClickCertifyButtonElement = (form) => {
  let result = {name: null, registerNumber: null, carrierCode: null, phoneNumber: null, termsCode: null};

  // 통신사
  const carrierCode = form.querySelector('#carrier').value;
  result.carrierCode = carrierCode;

  // input(휴대폰번호, 주민등록번호, 이름)
  const inputElements = Array.from(form.querySelectorAll('input[type="text"]'));
  inputElements.map(inputElement => {
    result[inputElement.id] = inputElement.value;
  });

  // 약관
  let termsCode = form.querySelector('#allTermAgree:checked') ? ["1", "2", "3", "4"] : null;
  if(!termsCode) {
    const termElements = Array.from(form.querySelectorAll('input[type="checkbox"]:not(#allTermAgree):checked'));
    termsCode = termElements.map(term => term.value);
  }
  result.termsCode = termsCode;

  // 결과 출력
  console.log(result);
}