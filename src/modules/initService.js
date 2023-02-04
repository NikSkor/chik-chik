import { API_URL, priceList, reserveFieldsetService } from "./const";
import { addPreload } from "./preloaders/addPreload";
import { removePreload } from "./preloaders/removePreloader";
import { renderPrice } from "./render/renderPrice";
import { renderService } from "./render/renderService";

export const initService = () => {
  addPreload(priceList);
  addPreload(reserveFieldsetService);

  fetch(`${API_URL}/api`)
  .then(response => response.json())
  .then(data => {
    // console.log('data: ', data);
    renderPrice(priceList, data);
    removePreload(priceList);
    return data;
  })
  .then (data => {
    renderService(reserveFieldsetService, data);
    removePreload(reserveFieldsetService);
  })
};