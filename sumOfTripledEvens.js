const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripledEvens(array) {
    return array
        .filter(num => num % 2 === 0) // Filter even numbers
        .map(num => num * 3) // Triple each even number
        .reduce((acc, num) => acc + num, 0); // Sum the tripled even numbers
}

console.log(sumOfTripledEvens(array)); // Output: 90
