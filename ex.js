let numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

numbers.forEach(number => {
    console.log(number);
});

let prices = [10, 20, 30];

let with_tax = prices.map((price) => {
    return price * 1.1;
});

console.log(with_tax);

let trans_num = numbers.map((number) => {
    return number = 2;
});

console.log(trans_num);