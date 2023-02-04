import { API_URL, reserveForm } from './const';
import { addDisabled } from './disableders/addDisabled';
import { removeDisabled } from './disableders/removeDisabled';
import { addPreload } from './preloaders/addPreload';
import { removePreload } from './preloaders/removePreloader';
import { renderDay } from './render/renderDay';
import { renderMonth } from './render/renderMonth';
import { renderSpec } from './render/renderSpec';
import { renderTime } from './render/renderTime';

export const initReserve = () => {
  // reserveForm
  const { fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn } =
    reserveForm;
  addDisabled([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);
  // fieldspec.innerHTML = `
  //   <legend class="reserve__legend">
  //     Специалист
  //   </legend>
  // `;

  reserveForm.addEventListener('change', async (e) => {
    const target = e.target;

    if (target.name === 'service') {
      addDisabled([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);
      addPreload(reserveForm);
      const response = await fetch(`${API_URL}/api?service=${target.value}`);
      const data = await response.json();
      console.log('data: ', data);

      renderSpec(fieldspec, data);
      removePreload(reserveForm);
      removeDisabled([fieldspec]);
    }

    if (target.name === 'spec') {
      addDisabled([fielddata, fieldmonth, fieldday, fieldtime, btn]);
      addPreload(fieldmonth);
      console.log(target.value);
      const response = await fetch(`${API_URL}/api?spec=${target.value}`);
      const data = await response.json();
      console.log('data: ', data);

      renderMonth(fieldmonth, data);
      removePreload(fieldmonth);
      removeDisabled([fielddata, fieldmonth]);
    }

    if (target.name === 'month') {
      addDisabled([fieldday, fieldtime, btn]);
      addPreload(fieldday);
      console.log(target.value);
      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${target.value}`
      );
      const data = await response.json();
      console.log('data: ', data);

      renderDay(fieldday, data, target.value);
      removePreload(fieldday);
      removeDisabled([fieldday]);
    }

    if (target.name === 'day') {
      addDisabled([fieldtime, btn]);
      addPreload(fieldtime);
      console.log(target.value);
      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${reserveForm.month.value}&day=${target.value}`
      );
      const data = await response.json();
      console.log('data: ', data);

      renderTime(fieldtime, data);
      removePreload(fieldtime);
      removeDisabled([fieldtime]);
    }

    if (target.name === 'time') {
      removeDisabled([btn]);
    }
  })
};
