import { slider, sliderContainer } from "./const";
import { addPreload } from "./preloaders/addPreload";
import { removePreload } from "./preloaders/removePreloader";
import { startSlider } from "./startSlider";

export const initSlider = () => {
  sliderContainer.style.display = 'none';
  addPreload(slider);

  window.addEventListener('load', () => {
    sliderContainer.style.display = '';
    removePreload(slider);

    startSlider();
  })

};

