export const removeAllWhiteSpace = (str) => {
  return str && str.replace(/(\s*)/g, '');
}

export const removeAllHyphen = (str) => {
  return str && str.replace(/\-/g, '');
}