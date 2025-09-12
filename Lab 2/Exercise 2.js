// Capitalize with Destructuring & Spread
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalize("hello"));
