import { API_URL } from "../const";
import { createElement } from "../utils/createElement";

export const renderSpec = (wrapper, data) => {
  wrapper.textContent = '';
  wrapper.innerHTML = `
    <legend class="reserve__legend">
      Специалист
    </legend>
  `;

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
              name: 'spec',
              value: item.id,
            }),
            createElement('span', {
              className: 'radio__label radio__label_spec',
              textContent: item.name,
              style: `--bg-image: url('${API_URL}${item.img}');`,
            },),
          ],
        }
      );
    });

  // <label class="radio">
  //   <input class="radio__input" type="radio" name="spec">
  //   <span class="radio__label radio__label_spec radio__label_spec-1">Игорь</span>
  // </label>
};