import { handleFocusToNextInputElement } from "./common";

export const initEventHandlerOfPhoneNumberInput = () => {
  const phoneNumberInputElement = document.querySelector('#phoneNumber');
  phoneNumberInputElement.addEventListener('keyup', (e) => {
    const phoneNumberInputValue = e.target.value;

    // 휴대폰 번호 11자리 완성 시, 다음 input으로 focus
    if(phoneNumberInputValue.length === 11) {
      handleFocusToNextInputElement(phoneNumberInputElement);
    }
  });
};