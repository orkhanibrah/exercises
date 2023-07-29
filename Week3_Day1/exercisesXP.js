//Exercise 1
let favFood = 'chicken';
let favMeal = 'dinner';
console.log(`I eat ${favFood} at every ${favMeal}`);


//Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;
console.log(myWatchedSeriesSentence);

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = 'friends';
console.log(myWatchedSeries);

myWatchedSeries.push('blacklist');
console.log(myWatchedSeries);

myWatchedSeries.unshift('the office');
console.log(myWatchedSeries)

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);


//Exercise 3

