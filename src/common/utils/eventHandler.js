import { Vendors } from '../constants/vendors';
import { Terms } from '../constants/terms';
import {
  checkInputLength,
  checkNumberFormat
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
export const setVendorOptionElements = (vendorSelectElement) => {
  const venderOptions = Vendors.map(vender => (`<option value=${vender.code}>${vender.description}</option>`)).join('');
  vendorSelectElement.innerHTML = venderOptions;
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