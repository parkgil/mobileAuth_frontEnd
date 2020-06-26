import {
    handleFocusToNextInputElement,
    setVendorOptionElements,
    setTermLiElements,
    clickAllTermsAgree,
    clickEachTermAgree,
    handleFullInputLength,
} from './common/utils/eventHandler';

// 통신사 select element
const vendorSelectElement = document.querySelector('#vendors');
//
setVendorOptionElements(vendorSelectElement);
// 
vendorSelectElement.addEventListener('change', () => handleFocusToNextInputElement(vendorSelectElement));


// 휴대폰번호 input element
const phoneNumberInputElement = document.querySelector('#phoneNumber');
phoneNumberInputElement.addEventListener('keyup', (e) => handleFullInputLength(e, 11, phoneNumberInputElement));

// 주민등록번호 input element
const registrationNumberInputElement = document.querySelector('#registrationNumber');
registrationNumberInputElement.addEventListener('keyup', (e) => handleFullInputLength(e, 7, registrationNumberInputElement));

// 이름 input element
const nameInput = document.querySelector('#name');
nameInput.addEventListener('keyup', (e) => handleFullInputLength(e, 3, nameInput));

// 약관 ul element
const termUlElement = document.querySelector('#terms');
setTermLiElements(termUlElement);
termUlElement.addEventListener('click', () => clickEachTermAgree(termUlElement, allTermsAgreeCheckboxElement));

// 전체 동의 checkbox element
const allTermsAgreeCheckboxElement = document.querySelector('#allTermAgree');
allTermsAgreeCheckboxElement.addEventListener('click', (e) => clickAllTermsAgree(e, termUlElement));