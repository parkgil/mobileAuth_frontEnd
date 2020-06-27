import {checkInputLength} from "./validator";

export const replaceStrForRegex = (str, regex) => {
  return str && str.replace(regex, '');
}

export const addSpecialSyntaxForFormat = (value, loc, syntax) => {
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

export const checkFulfiledInputLength = (e, maxLength) => e.target.value.length === maxLength;

// 다음 항목으로 포커스 이동
export const handleFocusToNextInputElement = (currElement) => {
  const wrapperElement = currElement && currElement.parentElement.parentElement;
  const nextWrapperElement = wrapperElement && wrapperElement.nextElementSibling;
  const nextInputElement = nextWrapperElement && nextWrapperElement.childElementCount > 0 ? nextWrapperElement.querySelector('input') : null;

  if(nextInputElement) nextInputElement.focus();
}

// 숫자값 길이 체크 : keydown
export const checkNumberValueLength = (e, element, standardLength) => {
  const inputValue = e.target.value;
  if(checkInputLength(inputValue, standardLength)) {
    const maxLength = typeof standardLength === 'object' ? standardLength[standardLength.length - 1] : standardLength;
    checkFulfiledInputLength(e, maxLength) && handleFocusToNextInputElement(element);
    // error class 제거
    element && element.classList.remove('error');
    return true;

  } else {
    e.type === 'focusout' && element && (inputValue.length === 0
      ? element.classList.remove('error')
      : element.classList.add('error'));

    return false;
  }
}