import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import IMask from 'imask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const aboutUsButton = document.querySelector('.about-us__button');
  const aboutUsDescr = document.querySelector('.about-us__description--hidden');
  addEventListener('click', () => {
    if (aboutUsButton.textContent !== 'Свернуть') {
      aboutUsDescr.classList.remove('about-us__description--hidden');
      aboutUsButton.textContent = "Свернуть";
    } else {
      aboutUsDescr.classList.add('about-us__description--hidden');
      aboutUsButton.textContent = "Подробнее";
    }
  })

  const accordeonButtons = document.querySelectorAll('.footer__accordeon');

  if (window.innerWidth < 767) {
    accordeonButtons.forEach((n) => {
      n.classList.remove('footer__accordeon--active');
      n.nextElementSibling.style.display = 'none';
    });
  }

  for (let i = 0; i < accordeonButtons.length; i++) {
    accordeonButtons[i].addEventListener('click', function() {
      accordeonButtons.forEach((n) => {
        if (n !== this) {
          n.classList.remove('footer__accordeon--active');
          n.nextElementSibling.style.display = 'none';
        }
      });

      accordeonButtons[i].classList.toggle('footer__accordeon--active');

      let panel = accordeonButtons[i].nextElementSibling;
      if (getComputedStyle(panel).display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    })
  }

  const phoneInputs = document.querySelectorAll('#phone');
  phoneInputs.forEach(phone => {
    var phoneMask = IMask(phone, {
      mask: '+{7}(000)000-00-00'
    });
  });


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
