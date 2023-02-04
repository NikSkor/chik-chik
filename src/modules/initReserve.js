import { API_URL, reserveForm } from './const';
import { addDisabled } from './disableders/addDisabled';
import { removeDisabled } from './disableders/removeDisabled';
import { addPreload } from './preloaders/addPreload';
import { removePreload } from './preloaders/removePreloader';
import { renderSpec } from './render/renderSpec';

export const initReserve = () => {
  // reserveForm
  const { fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn } =
    reserveForm;
  addDisabled([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);

  reserveForm.addEventListener('change', async (e) => {
    const target = e.target;

    if (target.name === 'service') {
      addPreload(reserveForm);
      const response = await fetch(`${API_URL}/api?service=${target.value}`);
      const data = await response.json();
      console.log('data: ', data);

      renderSpec(fieldspec, data);
      removePreload(reserveForm);
      removeDisabled([fieldspec]);
    }
  })
};
