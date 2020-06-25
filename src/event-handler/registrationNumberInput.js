import { handleFocusToNextInputElement } from "./common";

export const initEventHandlerOfRegistrationNumberInput = () => {
  const registrationNumberInputElement = document.querySelector('#registrationNumber');
  registrationNumberInputElement.addEventListener('keyup', (e) => {
    const registrationNumberInputValue = e.target.value;

    // 휴대폰 번호 11자리 완성 시, 다음 input으로 focus
    if(registrationNumberInputValue.length === 7) {
      handleFocusToNextInputElement(registrationNumberInputElement);
    }
  });
};