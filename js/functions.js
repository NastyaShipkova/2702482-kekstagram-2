
// Задача 1
const checkString = (text, maxLength) => text.length <= maxLength;

checkString('abc', 2);
// console.log(checkString('abcd', 2))
// console.log(checkString('abc', 3))
// console.log(checkString('abc121212', 2))

const checkPalindrom = (text) => {
  const normalised = text.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalised.length - 1; i >= 0; i--) {
    reversed = reversed + normalised[i]
  }
  return normalised === reversed;
};

checkPalindrom('шалаШ1');

// Задача 3
const extractNumbers = (text) => {
  let result = '';

  const normalString = text.toString();

  for (let i = 0; i <= normalString.length - 1; i++) {
    if (Number.isNaN(parseInt(normalString[i], 10)) === false) {
      result += normalString[i];
    }
  }
  return parseInt(result, 10);
};

extractNumbers('компот из 2023 года 2 месяцa');
// console.log(extractNumbers(123321))

