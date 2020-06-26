export const checkInputLength = (value, demandedLength) => {
  const valueLength = value && value.length;
  if(valueLength && demandedLength) {
    // demandedLength가 array형태일 경우
    if(typeof demandedLength === 'object' && demandedLength.length > 0) {
      const resultArr = demandedLength.map(length => {
        return length === valueLength;
      });
      if(resultArr.includes(true)) return true;

    // demandedLength가 자연수일 경우
    } else if(Number(demandedLength) > 0) {
      if(valueLength === demandedLength) return true;
    }
  }

  return false;
}

export const checkNumberFormat = (e) => {
  const currKey = e.key;
  const currKeyCode = e.keyCode;
  if(Number(currKey) >= 0 || currKeyCode === 8 || currKeyCode === 9 || currKeyCode === 37 || currKeyCode === 39) {
    return true;
  }

  return false;
}