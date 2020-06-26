import { Carriers } from '../constants/carriers';
import { Terms } from '../constants/terms';
import {
  checkInputLength,
  checkNumberFormat,
} from './validator'

// 다음 항목으로 포커스 이동
export const handleFocusToNextInputElement = (currElement) => {
  const wrapperElement = currElement.parentElement.parentElement;
  const nextWrapperElement = wrapperElement && wrapperElement.nextElementSibling;
  const nextInputElement = nextWrapperElement && nextWrapperElement.childElementCount > 0 ? nextWrapperElement.querySelector('input') : null;

  if(nextInputElement) nextInputElement.focus();
}

// input 길이 다채운 경우
export const handleFullInputLength = (e, maxLength, element) => {
  const inputValue = e.target.value;
  if(inputValue.length === maxLength) {
    handleFocusToNextInputElement(element);
  }
}

const addSpecialSyntaxForFormat = (value, loc, syntax) => {
  let result = '';
  const valueLength = value && value.length;
  if(valueLength && loc && syntax) {
    if(typeof loc === "object" && loc.length > 0) {
      let locArrStartIndex = 0;
      loc.map(locNum => {
        result += value.substring(locArrStartIndex, locNum) + syntax;
        locArrStartIndex = locNum;
      });
      result += value.substring(locArrStartIndex, valueLength);
    } else if(Number(loc) > 0) {
      result = value.substring(0, loc) + syntax + value.substring(loc, valueLength);
    }
  }
  return result;
}

// 통신사 option element 설정
export const setCarrierOptionElements = (carrierSelectElement) => {
  const carrierOptions = Carriers.map(carrier => (`<option value=${carrier.code}>${carrier.description}</option>`)).join('');
  carrierSelectElement.innerHTML = carrierOptions;
}

// validation check(validator.js에 작성) : keydown
export const checkPhoneNumberLength = (e, phoneNumberInput) => {
  const inputValue = e.target.value;
  if(checkInputLength(inputValue, [10, 11])) {
    handleFullInputLength(e, 11, phoneNumberInput);
    // error class 제거
    phoneNumberInput.classList.remove('error');
  } else {
    phoneNumberInput.classList.add('error');
  }
}

// 숫자 값 체크
export const checkNumberValue = (e) => {
  if(!checkNumberFormat(e)) {
    e.preventDefault();
  }
}

// 휴대폰 번호 input format(스페이스바 삽입) : focusout
export const formattingPhoneNumber = (phoneNumberInput) => {
  // 10자리인 경우 3,6 사이 space, 11자리인 경우 3, 7 사이 space 추
  const phoneNumberInputLength = phoneNumberInput.value.length;
  if(phoneNumberInputLength >= 10) {
    const loc = phoneNumberInputLength === 10 ? [3, 6] : [3, 7];
    const currPhoneNumber = phoneNumberInput.value;
    phoneNumberInput.value = addSpecialSyntaxForFormat(currPhoneNumber, loc, ' ') || currPhoneNumber;
  }
}

// 주민등록 번호 input format(- 삽입) && validation check(validator.js에 작성) : keydown

// 이름 input validation check(validator.js)에 작성 : keydown


// 약관 li element 설정
export const setTermLiElements = (termUlElement) => {
  const termsLis = Terms.map(term => (
    `<li>
        <input id=${'term' + term.termsId} type="checkbox" value=${term.termsId}>
        <label id=${'termLabel' + term.termsId} for=${'term' + term.termsId}>${term.title}</label>
     </li>`
  )).join('');

  termUlElement.innerHTML = termsLis;
}

// 전체동의 클릭
export const clickAllTermsAgree = (e, termUlElement) => {
  const checked = e.target.checked;
  const termLiElements = [...termUlElement.children];
  termLiElements.map(li => li.children[0].checked = checked);
}

// 약관 checkbox 클릭 이벤트
export const clickEachTermAgree = (termUlElement, allTermsAgreeCheckboxElement) => {
  const termLiElements = [...termUlElement.children];
  const nonCheckedCount = termLiElements.filter(li => !li.children[0].checked).length;
  allTermsAgreeCheckboxElement.checked = nonCheckedCount === 0;
}


export const certify = (form) => {
  let result = {name: null, registerNumber: null, carrierCode: null, phoneNumber: null, termsCode: null};

  // 통신사
  const carrierCode = form.querySelector('#carrier').value;
  result.carrierCode = carrierCode;

  // input(휴대폰번호, 주민등록번호, 이름)
  const inputElements = [...form.querySelectorAll('input[type="text"]')];
  inputElements.map(inputElement => {
    result[inputElement.id] = inputElement.value;
  });
  
  // 약관
  let termsCode = form.querySelector('#allTermAgree:checked') ? ["1", "2", "3", "4"] : null;
  if(!termsCode) {
    const termElments = [...form.querySelectorAll('input[type="checkbox"]:not(#allTermAgree):checked')];
    termsCode = termElments.map(term => term.value);
  }
  result.termsCode = termsCode;

  // 결과 출력
  console.log(result);
}