// Strings are a sequence of charcters used for representing text(strings are immutable, original string wont change)

// string methods
// 1. length - Returns the number of characters in the string.
// 2. toUpperCase() - converts the string to uppercase.
// 3. toLowerCase() - converts the string to lowercase.
// 4. includes(): checks if the string contains a specific subString
// 5. indexof(): returns the index of the first occurance of a substring
// 6. trim(): Removes whitespace from both ends of the string
// 7. subString(start, end): Extracts a substring between two specifed indices
// 8. slice(start, end): extracts a portion of the string, supporting negative indices
// 9 replace(old, new): replaces a specified substring with another substring
// 10 split(seperator): splits the string into an array based on a sepertor
// 11 charAt(index): Retruns the character at the sepecifed index

// 1. length method example
let name = "shruti";
let res = name.length;
console.log(res);
console.log(name.toUpperCase()); // toUpperCase

// includes method
let str = "shruti";
console.log(str.includes('h'));

// indexof method
let str1 = 'shru';
console.log(str1.indexOf('u'));
// trim method
let str2 = "shruti     ";
console.log(str2.length); // without trim method it takes space as length
console.log(str2.trim().length);

// substring
let st1 = "Hey Shruti You achived what u dreamed"
let subst1 = st1.substring(1,5)
console.log(subst1);

// slice
let slic = "Hey Shruti You achived what u dreamed"
let part = slic.slice(1, 2)
console.log(part);

// replace
let rplc = "Hey Shruti You achived what u dreamed"
console.log(rplc.replace('Hey', 'Hi'));

// split
let splt = "Hey, Shruti You, achived what u dreamed"
let result = splt.split(" , ");
console.log(result);

// charAT
let stringchar = 'shruti';
console.log(str.charAt(2));