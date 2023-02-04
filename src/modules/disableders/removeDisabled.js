export const removeDisabled = (arr) => {
  arr.forEach((element) => {
    element.disabled = false;
  });
};