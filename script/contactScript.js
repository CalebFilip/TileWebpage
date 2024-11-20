'use strict';

const root = document.documentElement;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
  });

function buttonClick(e) {
    const btn = e.target;
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');

    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');

    buttons.forEach(btn2 => {
        if (btn !== btn2 && btn2.classList.contains('open')) {
            btn2.classList.remove('open')
            btn2.nextElementSibling.classList.remove('open')
        }
    })

}
