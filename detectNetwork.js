// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var first1 = cardNumber.slice(0, 1);
  var first2 = cardNumber.slice(0, 2);
  var first3 = cardNumber.slice(0, 3);
  var first4 = cardNumber.slice(0, 4);
  var first6 = cardNumber.slice(0, 6);

  if ((['38', '39'].includes(first2)) && cardNumber.length === 14) {
  	return 'Diner\'s Club'
  } else if ((['34', '37'].includes(first2)) && cardNumber.length === 15) {
  	return 'American Express'
  } else if ((['4903', '4905', '4911', '4936', '6333', '6759'].includes(first4) ||
  	          ['564182', '633110'].includes(first6)) &&
  			 [16, 18, 19].includes(cardNumber.length)) {
  	return 'Switch'
  	// Switch must come before Visa to resolve potential conflict in favor of network with longer prefix,
  	// which always puts Switch ahead of Visa
  } else if (first1 === '4' && [13, 16, 19].includes(cardNumber.length)) {
  	return 'Visa'
  } else if ((['51', '52', '53', '54', '55'].includes(first2)) &&
  	         cardNumber.length === 16) {
  	return 'MasterCard'
  } else if ((first4 === '6011' ||
  	          ['644', '645', '646', '647', '648', '649'].includes(first3) ||
  	          first2 === '65') &&
  	         [16, 19].includes(cardNumber.length)) {
  	return 'Discover'
  } else if ((['5018', '5020', '5038', '6304'].includes(first4)) &&
  			 cardNumber.length >= 12 && cardNumber.length <= 19) {
  	return 'Maestro'
  } else if (((!isNaN(parseInt(first6)) &&
  			   parseInt(first6) >= 622126 && parseInt(first6) <= 622925) ||
  			  ['624', '625', '626'].includes(first3) ||
  			  (!isNaN(parseInt(first4)) &&
  			   parseInt(first4) >= 6282 && parseInt(first4) <= 6288)) &&
  			 cardNumber.length >= 16 && cardNumber.length <= 19) {
  	return 'China UnionPay'
  } else {
  	return 'Other'
  }
};