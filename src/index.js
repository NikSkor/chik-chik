import './index.html';
import './index.scss';
import { initService } from './modules/initService';
import { initSlider } from './modules/initSlider';

const init = () => {
  initSlider();
  initService();
};

window.addEventListener('DOMContentLoaded', init);