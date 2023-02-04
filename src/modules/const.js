export const API_URL = 'https://thoughtful-historical-knife.glitch.me/';

// GET /api - получить список услуг
// GET /api?service={n} - получить список барберов
// GET /api?spec={n} - получить список месяца работы барбера
// GET /api?spec={n}&month={n} - получить список дней работы барбера
// GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
// POST /api/order - оформить заказ

export const slider = document.querySelector('.slider');
export const sliderContainer = document.querySelector('.slider__container');
export const sliderItems = document.querySelectorAll('.slider__item');
export const sliderList = document.querySelector('.slider__list');
export const btnPrevSlide = document.querySelector('.slider__arrow_left');
export const btnNextSlide = document.querySelector('.slider__arrow_right');
export const priceList = document.querySelector('.price__list');
export const reserveFieldsetService = document.querySelector('.reserve__fieldset_service');
export const reserveForm = document.querySelector('.reserve__form');

