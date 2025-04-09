export function getCardType(cardNumber) {
  const patterns = {
    visa: /^4/,
    mastercard:
      /^5[1-5]|^222[1-9]|^22[3-9][0-9]|^2[3-6][0-9]{2}|^27[01][0-9]|^2720/,
    amex: /^3[47]/,
    discover: /^6011|^64|^65|^622[1-9]/,
    jcb: /^35[2-8][0-9]/,
    diners: /^30[0-5]|^36|^38/,
    mir: /^220[0-4]/,
    unionpay: /^62/,
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(cardNumber)) return type;
  }

  return "unknown";
}
