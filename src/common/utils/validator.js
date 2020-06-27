export const checkInputLength = (value, demandedLength) => {
  const valueLength = value && value.length;
  if(valueLength && demandedLength) {
    // demandedLength가 array형태일 경우
    if(typeof demandedLength === 'object' && demandedLength.length > 0) {
      const resultArr = demandedLength.map(length => length === valueLength);
      if(resultArr.includes(true)) return true;

    // demandedLength가 자연수일 경우
    } else if(Number(demandedLength) > 0) {
      return valueLength === demandedLength;
    }
  }

  return false;
}

export const checkNumberFormat = e => {
  const BACK_SPACE_KEY_CODE = 8;
  const TAB_KEY_CODE = 9;
  const LEFT_ARROW_KEY_CODE = 37;
  const RIGHT_ARROW_KEY_CODE = 39;

  const currKey = e.key;
  const currKeyCode = e.keyCode;
  if(Number(currKey) >= 0 || [BACK_SPACE_KEY_CODE, TAB_KEY_CODE, LEFT_ARROW_KEY_CODE, RIGHT_ARROW_KEY_CODE].includes(currKeyCode)) {
    return true;
  }

  return false;
}