export const addDisabled = (arr) => {
  arr.forEach(element => {
    element.disabled = true;
  });
};