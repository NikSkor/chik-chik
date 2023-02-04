import { year } from "../const";
import { createElement } from "../utils/createElement";

export const renderMonth = (wrapper, data) => {
  wrapper.textContent = '';

  data.map((item) => {
    createElement(
      'label',
      {
        className: 'radio',
      },
      {
        parent: wrapper,
        appends: [
          createElement('input', {
            className: 'radio__input',
            type: 'radio',
            name: 'month',
            value: item,
          }),
          createElement('span', {
            className: 'radio__label',
            textContent: new Intl.DateTimeFormat('ru-RU', {
              month: 'long'
            }).format(new Date(year, item)),
          }),
        ],
      }
    );
  });
};