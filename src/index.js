import { validateCardNumber } from './app/validateCardNumber';
import { getCardType } from './app/getCardType';

const form = document.getElementById('card-form');
const input = document.getElementById('card-number');
const result = document.getElementById('result');
const icon = document.getElementById('card-icon');

input.addEventListener('input', () => {
  const cardNumber = input.value.replace(/\s+/g, '');
  const cardType = getCardType(cardNumber);
  icon.src = cardType !== 'unknown' ? `./assets/${cardType}.png` : '';

  if (validateCardNumber(cardNumber)) {
    result.textContent = '✅ Валидная карта';
    result.style.color = 'green';
  } else {
    result.textContent = '❌ Невалидная карта';
    result.style.color = 'red';
  }
});