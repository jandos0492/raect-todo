// const person = {
//     name: {
//         first: "Peter",
//         last: "Smith",
//     },
//     age: 27,
//     role: "admin"
// };

// const firstName = person.firstName;
// const lastName = person.lastName;

// console.log(firstName);
// console.log(lastName);

// const { name: { first: firstName, last: lastName } } = person;
// console.log(firstName, lastName);

// const { permissions: { role = "user" } = {} } = person;
// console.log(role);

// function connect({
//     host = "localhost",
//     port = 12345,
//     user = "guest"
//                     } = {}) {
//     console.log("user:", user, "port:", port, "host:", host);
// }

// connect();

const dict = {
    duck: "quack",
    dog: "wuff",
    mouse: "aqueke"
};

const { duck, ...otherAnimals } = dict;

console.log(otherAnimals);
