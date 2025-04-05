const rho = Number(prompt("Enter rho"));
const t = [1, 2, 5, 10, 15, 20];
let mu = [];
function calcmu() {
  for (let i = 0; i < 6; i++) {
    mu.push(Number(prompt(`Enter mu-${i + 1}`)));
  }
  return rho;
}
console.log(m);
console.log(t);
console.log(calcmu());

let EW = [];
for (let x = 0; x < mu.length; x++) {
  EW.push((rho / (mu[x] * (1 - rho))).toFixed(5));
}
console.log(EW);

let x = [];
for (let n = 0; n < mu.length; n++) {
  for (let k = 0; k < t.length; k++) {
    x.push((rho * Math.exp(-mu[n] * (1 - rho) * t[k])).toFixed(5));
  }
}
console.log(x);

// //givens
// const mu = Number(prompt("Enter mu"));
// // const t = [1, 2, 5, 10, 15, 20];
// const t = [1, 2, 5, 10, 15, 20];

// let rho = [];
// function calcrho() {
//   for (let i = 0; i < 6; i++) {
//     rho.push(Number(prompt(`Enter rho-${i + 1}`)));
//   }
//   return rho;
// }

// console.log(mu);
// console.log(t);
// console.log(calcrho());

// let EW = [];
// for (let x = 0; x < rho.length; x++) {
//   EW.push((rho[x] / (mu * (1 - rho[x]))).toFixed(5));
// }
// console.log(EW);

// let x = [];
// for (let n = 0; n < rho.length; n++) {
//   for (let k = 0; k < t.length; k++) {
//     x.push((rho[n] * Math.exp(-mu * (1 - rho[n]) * t[k])).toFixed(5));
//   }
// }
// console.log(x);
