import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  let aboutUsButton = document.querySelector('.about-us__button');
  let aboutUsDescr = document.querySelector('.about-us__description--hidden');
  addEventListener('click', () => {
    if (aboutUsButton.textContent != 'Свернуть') {
      aboutUsDescr.classList.remove('about-us__description--hidden');
      aboutUsButton.textContent = "Свернуть";
    } else {
      aboutUsDescr.classList.add('about-us__description--hidden');
      aboutUsButton.textContent = "Подробнее";
    }
  })

  let accordeonButtons = document.querySelectorAll('.footer__accordeon');
  for (let i = 0; i < accordeonButtons.length; i++) {
    accordeonButtons[i].addEventListener('click', () => {
      //accordeonButtons.forEach((n => n.classList.remove('footer__accordeon--active')));
      accordeonButtons[i].classList.toggle('footer__accordeon--active');

      let panel = accordeonButtons[i].nextElementSibling;
      if (getComputedStyle(panel).display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    })
  }

  $("#feedback-phone").mask("+7(999) 999-9999");
  $("#modal-phone").mask("+7(999) 999-9999");
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
