console.log('Financial Analysis\n-------------------------------');

//total number of months as per the records. It's implicit as there are only 86 arrays in total.

var months = 86;

console.log(`Total Months: ${months}`);

/*calculating the net total amount of profit/losses using
a for loop to iterate through every amount then adding each amount to the previous one
*/

var total = 0;

for (var i = 0 ; i < finances.length ; i++) {
    var amount = finances[i][1];

    total += amount;
}

console.log(`Total: $` + total);


/*using a for loop to iterate through each amount and an addition assignment to track
the change from each month. The total was rounded to two decimal places as these are 
currency values.
*/

var avgChange = 0;
var counter = 0;

for (var i = 0; i < finances.length; i++) {
  var amount = finances[i][1];

  avgChange += amount;
  counter++;
}

console.log("Average Change: $" + (avgChange / counter).toFixed(2));


/*created two variables to take in the highest increase and its respective month after
the for loop.
*/

var grtIncrease = 0;
var grtIncrMonth = "";

for (var i = 0; i < finances.length; i++) {
    var month = finances[i][0];
    var amount = finances[i][1];

    if (grtIncrease <= amount) {
        grtIncrMonth = month;
        grtIncrease = amount;
    }
}

console.log(`Greatest Increase in Profits: ${grtIncrMonth} ($${grtIncrease})`);

//similar to the previous calculation but we are finding the greatest decrease

var grtDecrease = 0;
var grtDecrMonth = 0;

for (var i = 0; i < finances.length; i++) {
    var month = finances[i][0];
    var amount = finances[i][1];

    if (grtDecrease >= amount) {
        grtDecrMonth = month;
        grtDecrease = amount;
    }
}

console.log(`Greatest Decrease in Profits: ${grtDecrMonth} ($${grtDecrease})`);