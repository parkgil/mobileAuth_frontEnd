import { handleFocusToNextInputElement } from "./common";

export const initEventHandlerOfVendorSelect = () => {
  const vendorSelectElement = document.querySelector('#vendors');
  // 통신사 선택 시, 다음 input으로 focus
  vendorSelectElement.addEventListener('change', () => handleFocusToNextInputElement(vendorSelectElement));
};