/* eslint-disable no-param-reassign */
import pickPaymentSystem from '../functions/pickPaymentSystem';
import validNumber from '../functions/validNumber';

export default class ValidateWidget {
  constructor(parent) {
    this.parent = parent;
    this.input = null;
    this.payImages = null;
  }

  init() {
    this.parent.innerHTML = `
      <form id='validate_form'>
        <div class='card-box'>
          <div class='image-card' data-id='visa'><img src='../src/img/visa.png' alt='visa'></div>
          <div class='image-card' data-id='mastercard'><img src='../src/img/mastercard.png' alt='mastercard'></div>
          <div class='image-card' data-id='mir'><img src='../src/img/mir.png' alt='mir'></div>
          <div class='image-card' data-id='american-express'><img src='../src/img/americanexpress.png' alt='american express'></div>
          <div class='image-card' data-id='jcb'><img src='../src/img/jcb.png' alt='jcb'></div>
          <div class='image-card' data-id='discover'><img src='../src/img/discover.png' alt='discover'></div>
          <div class='image-card' data-id='diners-club'><img src='../src/img/dinersclub.png' alt='diners club'></div>
        </div>
        <div class='input-box'>
          <input id='validate_input' type='text'>
          <button id='validate_button'>Click to Validate</button>
        </div>
     </form>`;
    this.payImages = document.getElementsByClassName('image-card');
    this.input = document.getElementById('validate_input');
    const form = document.getElementById('validate_form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validate(this.input.value);
    });
    this.input.addEventListener('keypress', () => {
      if (this.input.classList.contains('valid') || this.input.classList.contains('invalid')) {
        this.input.className = '';
      }
      this.payImagesOff();
      const imageCard = document.querySelector(`[data-id="${pickPaymentSystem(this.input.value)}"]`);
      if (imageCard) {
        imageCard.style.opacity = 1;
      }
    });
  }

  validate(digits) {
    if (digits !== '' && validNumber(digits)) {
      this.input.className = 'valid';
    } else {
      this.input.className = 'invalid';
    }
  }

  payImagesOff() {
    this.payImages.forEach((el) => {
      el.style.opacity = 0.5;
    });
  }
}
