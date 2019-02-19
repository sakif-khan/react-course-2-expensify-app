// 
// Object Destructuring
// 


// const person = {
//     name: 'Sakif',
//     age: 101,
//     location: {
//         city: 'Dhaka',
//         temp: 92
//     }
// };
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age} years old.`);
// const { city, temp: temperature } = person.location;
// // console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);



// 
// Array Destructuring
// 

const address = [
    '270 Naddapara',
    'Dakshinkhan',
    'Dhaka',
    '1230'
];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);


const item = [
    'Coffee (iced)',
    '$2.00',
    '$3.50',
    '$2.75'
];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);