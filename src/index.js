import './index.html';
import './index.scss';
import { initReserve } from './modules/initReserve';
import { initService } from './modules/initService';
import { initSlider } from './modules/initSlider';

const init = () => {
  initSlider();
  initService();
  initReserve();
};

window.addEventListener('DOMContentLoaded', init);