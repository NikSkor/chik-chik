import { year } from '../const';
import { createElement } from '../utils/createElement';

export const renderDay = (wrapper, data, month) => {
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
            name: 'day',
            value: item,
          }),
          createElement('span', {
            className: 'radio__label',
            textContent: new Intl.DateTimeFormat('ru-RU', {
              month: 'long',
              day: 'numeric',
            }).format(new Date(year ,month, item)),
          }),
        ],
      }
    );
  });
};
