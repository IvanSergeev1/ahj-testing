export default function pickPaymentSystem(digits) {
  let system = false;
  if (/^[0-9]+$/.test(digits)) {
    if (/^4/.test(digits)) {
      system = 'visa';
    } else if (/^(34|37)/.test(digits)) {
      system = 'american-expess';
    } else if (/^5[1-5]/.test(digits)) {
      system = 'mastercard';
    } else if (/^(31|35)/.test(digits)) {
      system = 'jcb';
    } else if (/^(30|36|38)/.test(digits)) {
      system = 'diners-club';
    } else if (/^60/.test(digits)) {
      system = 'discover';
    } else if (/^2/.test(digits)) {
      system = 'mir';
    }
  }
  return system;
}
