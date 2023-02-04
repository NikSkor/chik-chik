import { createElement } from '../utils/createElement';

export const renderTime = (wrapper, data, month) => {
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
            name: 'time',
            value: item,
          }),
          createElement('span', {
            className: 'radio__label',
            textContent: item
          }),
        ],
      }
    );
  });
};
