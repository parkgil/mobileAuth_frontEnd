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

// 통신사 option element 설정
export const setCarrierOptionElements = (carrierSelectElement) => {
  const carrierOptions = Carriers.map(carrier => (`<option value=${carrier.code}>${carrier.description}</option>`)).join('');
  carrierSelectElement.innerHTML = carrierOptions;
}

// 휴대폰 번호 input format(스페이스바 삽입) && validation check(validator.js에 작성) : keydown
export const checkPhoneNumberInputValue = (e, phoneNumberInput) => {
  const currKey = e.key;
  const inputValue = e.target.value;
  if(checkInputLength(inputValue) && checkNumberFormat(currKey)) {

  } else {

  }

}
// 주민등록 번호 input format(- 삽입) && validation check(validator.js에 작성) : keydown

// 이름 input validation check(validator.js)에 작성 : keydown


// 약관 li element 설정
export const setTermLiElements = (termUlElement) => {
  const termsLis = Terms.map(term => (`<li><input type="checkbox" value=${term.termsId}>${term.title}</li>`)).join('');
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