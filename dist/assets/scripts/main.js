'use strict'

window.onload = function () {
  dropdown()
  modal()
}

var dropdown = () => {
  var dropdown = document.querySelectorAll('.dropdown')[0],
      button = document.querySelectorAll('.gamburger')[0];

  button.onclick = switcher

  function switcher() {
    this.classList.toggle('active')
    dropdown.classList.toggle('open')
  }

}

var modal = () => {
  var modal = document.querySelectorAll('.modal')[0],
      body = document.body,
      button = document.querySelectorAll('.profile__button')[0],
      close = document.querySelectorAll('.modal__close')[0];

  button.onclick = switcher
  close.onclick = switcher
  modal.onclick = function(event) {
    event.target.classList.toggle('open')
    body.classList.toggle('fixed')
  };

  function switcher() {
    modal.classList.toggle('open')
    body.classList.toggle('fixed')
  }

}
