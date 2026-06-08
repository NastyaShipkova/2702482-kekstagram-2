
// Задача 1
const checkString = (text,maxLength) => text.length <= maxLength;

console.log(checkString('abc',2))
console.log(checkString('abcd',2))
console.log(checkString('abc',3))
console.log(checkString('abc121212',2))

const CheckPalindrom= (text) => {
  const normaliset = text.replaceAll(' ','').toLowerCase();
}


// Задача 2
for (let i=S length-1;i=>0;i--) {
let SS=" ";
SS=SS+S[i];
}
console.log(S===SS)


// Задача 3
const extractNumbers= (string) => {
let result=' ';

string = string.toString ();

for (let i=0;  i <=string.length-1; i=+=) {
if (Number.isNaN(parseInt(string[i],10)) === false) {
result +=string[i];
  }
}
return result === " " ? NaN : Number(result);
};
console.log(extractNumbers("2023 год"))
