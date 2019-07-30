//
// /**
//  *1.Write an algorithm, either in pseudocode or in code, that converts weights to grams.  The algorithm should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".
//  * Based on the second argument, convert the number to grams and output it.
//  * @param mass the weight
//  * @param unit the abbreviation for the unit
//  */
// function convertToGram($mass, $units) {
//
// 	$convertedValue=0;
// 	if(units==='g'){
// 		return mass;
//
// 	}else if(units==='lbs'){
// 		return mass*453.592;
// 	} else if(units==='oz') {
// 		return mass * 28.35;
// 	}else if(units==='kg') {
// 		return mass*1000;
// 	}else if(units==='mg') {
// 		return mass / 1000;
// 	}
// 	return $convertedValue;
// }
// console.log(convertToGram(10, mg));
// /**2
// Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number.  (The factors of a number are all numbers that divide evenly into it.  For example, the unique positive factors
// of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)
//  *
//  * add unique positive factors
//  * @param number the number to be factored.
//  * @ return the sum of the factor.
// */

function sumUniquePostiveFactors(number){

	let sum=0;

	for(i=1; i<=number; i++) {
	    if (number % i === 0) {
        sum= sum + i;

		 }}
			 return sum;
}

console.log(sumUniquePostiveFactors(5000));
