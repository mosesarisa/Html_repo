let person = {
    name: 'Moses',
    age: 30
};
person.name = 'John'
person['name'] = 'Mary';
console.log(person.name);