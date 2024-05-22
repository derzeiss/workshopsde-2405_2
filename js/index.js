const people = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    age: 34,
  },
  {
    id: 2,
    firstname: 'John',
    lastname: 'Palmer',
    age: 4,
  },
  {
    id: 3,
    firstname: 'Max',
    lastname: 'Pane',
    age: 99999,
  },
];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
}

people.forEach((person) => {
  console.log(person);
});

const isJohn = (person) => person.firstname === 'John';

const allJohns = people.filter(isJohn);
console.log('all johns', allJohns);
const firstJohn = people.find(isJohn);
console.log('firstJohn', firstJohn);
const firstJohnIndex = people.findIndex(isJohn);
console.log('firstJohnIndex', firstJohnIndex);
const hasJohn = people.some(isJohn);
console.log('hasJohn', hasJohn);
const onlyJohns = people.every(isJohn);
console.log('onlyJohns', onlyJohns);

const ages = people.map((person) => person.age);
console.log('ages', ages);

const ageSum = people.reduce((sum, person) => {
  const newAgeSum = sum + person.age;
  return newAgeSum;
}, 0);
console.log('ageSum', ageSum);

const peopleById = people.reduce((byId, person) => {
  byId[person.id] = person;
  return byId;
}, {});
console.log('peopleById', peopleById);

const firstMary = people.find((person) => person.firstname === 'Mary');
console.log('firstMary', firstMary);

const johnsLastnames = people.filter(isJohn).map((person) => person.lastname);
console.log('johnsLastnames', johnsLastnames);
