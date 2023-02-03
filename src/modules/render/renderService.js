import { createElement } from "../utils/createElement";

export const renderService = (wrapper, data) => {
  wrapper.textContent = '';
  wrapper.innerHTML = `
    <legend class="reserve__legend">
      Услуга
    </legend>
  `;

  data.map(item => {
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
            name: 'service',
            value: item.id,
          }),
          createElement('span', {
            className: 'radio__label',
            textContent: item.name,
          }),
        ],
      }
    );
  });
};