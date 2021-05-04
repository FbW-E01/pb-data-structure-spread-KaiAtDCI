// 1. Combining Arrays
const euroCountries = ['Germany', 'Austria'];
const asianCountries = ['Japan', 'China'];
const combinedCountries = [...euroCountries, ...asianCountries];
console.log(combinedCountries);

// 2. Copying Arrays
const originalArray = [1, 2, 3];
const noCopy = originalArray;
console.log(noCopy === originalArray); // true, because both variables contain sam reference.
const copiedArray = [...originalArray];
console.log(originalArray === copiedArray); // false, this is a real clone

// 3. Find the Largest...
const max = Math.max(...originalArray);
console.log (max);

// 4. Find the msallest ...
const min = Math.min(...originalArray);
console.log (min);

// 5. Clone and merge
const person = { name: "John" };
const job = { role: "Teacher" };

// 5.1 Clone the person object.
const personClone = { ...person };
console.log(personClone === person); // false => referencing the copy

// 5.2 Merge
const employee = { ...person, ...job };
console.log(employee);

// 5.3
employee.name = "Bob";
employee.role = "Baumeister";
console.log(employee);

// Bonus: 6. Is the average a whole number?
function isAvergageWholeNumber(...numbers) {
    const avg = numbers.reduce((accu, current) => accu + current) / numbers.length;
    return avg % 1 === 0;
}

console.log(isAvergageWholeNumber(1,2,3,4)); // false
console.log(isAvergageWholeNumber(9,2,2,5)); // false
console.log(isAvergageWholeNumber(2,2,2,2,2,2)); // true



