import { API_URL, reserveForm, year } from './const';
import { addDisabled } from './disableders/addDisabled';
import { removeDisabled } from './disableders/removeDisabled';
import { addPreload } from './preloaders/addPreload';
import { removePreload } from './preloaders/removePreloader';
import { renderDay } from './render/renderDay';
import { renderMonth } from './render/renderMonth';
import { renderSpec } from './render/renderSpec';
import { renderTime } from './render/renderTime';
import { createElement } from './utils/createElement';

export const initReserve = () => {
  // reserveForm
  const {
    fieldservice,
    fieldspec,
    fielddata,
    fieldmonth,
    fieldday,
    fieldtime,
    btn,
  } = reserveForm;
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

      renderSpec(fieldspec, data);
      removePreload(reserveForm);
      removeDisabled([fieldspec]);
    }

    if (target.name === 'spec') {
      addDisabled([fielddata, fieldmonth, fieldday, fieldtime, btn]);
      addPreload(fieldmonth);
      const response = await fetch(`${API_URL}/api?spec=${target.value}`);
      const data = await response.json();


      renderMonth(fieldmonth, data);
      removePreload(fieldmonth);
      removeDisabled([fielddata, fieldmonth]);
    }

    if (target.name === 'month') {
      addDisabled([fieldday, fieldtime, btn]);
      addPreload(fieldday);
      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${target.value}`
      );
      const data = await response.json();

      renderDay(fieldday, data, target.value);
      removePreload(fieldday);
      removeDisabled([fieldday]);
    }

    if (target.name === 'day') {
      addDisabled([fieldtime, btn]);
      addPreload(fieldtime);
      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${reserveForm.month.value}&day=${target.value}`
      );
      const data = await response.json();

      renderTime(fieldtime, data);
      removePreload(fieldtime);
      removeDisabled([fieldtime]);
    }

    if (target.name === 'time') {
      removeDisabled([btn]);
    }
  })

  reserveForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(reserveForm);
    const json = JSON.stringify(Object.fromEntries(formData));

    const response = await fetch(`${API_URL}/api/order`, {
      method: 'POST',
      body: json,
    })

    const data = await response.json();
    console.log('data: ', data);
    addDisabled([fieldservice, fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);

    const p = createElement('p', {
      className: 'reserve__success',
      textContent: `
      Спасибо за бронь. Номер брони #${data.id}!
      Ждём вас ${new Intl.DateTimeFormat('ru-Ru', {
        month: 'long',
        day: 'numeric',
      }).format(new Date(year ,data.month, data.day))},
      время ${data.time}.
      `
    }, {
      parent: reserveForm
    })

  })
};
