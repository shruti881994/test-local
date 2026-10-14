console.log("Objects in javascript");

const persons = {
    id: 1,
    name: "shruti",
    age: 32,
    city: 'Bangalore',
    country: 'India'
}

console.log("My Name is", persons.name)

// Spread operator: when we need to copy

const laptop = {
    model: "Hp",
    ram: "16gb",
    ssd: "1 TB",
    price: 100000
}

const laptop1 = {
    ...laptop, ram: '20gb' // we ae writing spread operator to copy 
    // model: "Hp",
    // ram: "20gb",
    // ssd: "2 TB",
    // price: 1200000 // instead of calling this entire thing we can use spread operator to copy the data of laptop
}

console.log(laptop1);
console.log(laptop);


// object destructuring
const car = {
    brand: "Tata",
    model: "Punch",
    price: "130000",
    color: "Teal"
}

const {brand, model, price, color} = car; // destructuring
console.log(brand, price, model, color);