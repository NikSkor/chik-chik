import { createElement } from "../utils/createElement";

export const renderPrice = (wrapper, data) => {
  wrapper.textContent = '';
  data.forEach(item => {
    createElement(
      'li',
      {
        className: 'price__item',
      },
      {
        parent: wrapper,
        appends: [
          createElement('span', {
            className: 'price__item-title',
            textContent: item.name,
          }),
          createElement('span', {
            className: 'price__item-count',
            textContent: `${item.price} руб`,
          }),
        ],
      }
    );
  });
};