export const checkInputLength = (value, demandedLength) => {
  const valueLength = value && value.length;
  if(valueLength && valueLength === demandedLength) {
    return true;
  }

  return false;
}

export const checkNumberFormat = (value) => {
  console.log(value);
  return Number(value) >= 0;
}