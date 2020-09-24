import validNumber from '../functions/validNumber';

test.each([
  ['valid card number', '371449635398431', true],
  ['invalid card number', '30569309025905', false],
])(('Test validNumber  for '), (_, input, expected) => {
  expect(validNumber(input)).toBe(expected);
});
