const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Asynchronous Promises
// alice1.animate(aliceTumbling, aliceTiming);
// alice2.animate(aliceTumbling, aliceTiming);
// alice3.animate(aliceTumbling, aliceTiming);

// Promise All
// const animationAlice1 = alice1.animate(aliceTumbling, aliceTiming).finished;
// const animationAlice2 = alice2.animate(aliceTumbling, aliceTiming).finished;
// Promise.all([animationAlice1, animationAlice2]).then(() => {
//   alice3.animate(aliceTumbling, aliceTiming);
// });

// CALLBACK HELL
// const alice1Animation = alice1.animate(aliceTumbling, aliceTiming);
// alice1Animation.finished.then(() => {
//   const alice2Animation = alice2.animate(aliceTumbling, aliceTiming);

//   alice2Animation.finished.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   });
// });

// PROMISE CHAIN
// alice1
//   .animate(aliceTumbling, aliceTiming).finished
//   .then(() =>  alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming));

// ASYNC / AWAIT
// const chamada = async () => {
//   await alice1.animate(aliceTumbling, aliceTiming).finished;
//   await alice2.animate(aliceTumbling, aliceTiming).finished;
//   await alice3.animate(aliceTumbling, aliceTiming).finished;
// };

// chamada();
