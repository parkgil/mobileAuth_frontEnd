export const handleFocusToNextInputElement = (currElement) => {
    const wrapperElement = currElement.parentElement.parentElement;
    const nextWrapperElement = wrapperElement && wrapperElement.nextElementSibling;
    const nextInputElement = nextWrapperElement && nextWrapperElement.childElementCount > 0 ? nextWrapperElement.querySelector('input') : null;

    if(nextInputElement) nextInputElement.focus();
}
