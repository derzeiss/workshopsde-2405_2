import { checkNumber, checkNumber2, job } from './07-job.js';

const task1 = () => {
  job().then(console.log);
};

const task2 = () => {
  const testCases = ['test', 1, 2];
  testCases.forEach((p) => {
    checkNumber(p).then(console.log).catch(console.error);
  });
};

const task3 = () => {
  job().then(checkNumber).then(console.log).catch(console.error);
};

const task4 = () => {
  job()
    .then(checkNumber2)
    .then((num) => console.log(`${num} * 2 = ${num * 2}`))
    .catch((num) => console.error(`Number "${num}" is greater than 5`));
};

task1();
