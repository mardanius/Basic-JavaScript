
/*--------------
Basic JavaScript
----------------

JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, 
along with HTML and CSS, and is supported by all modern browsers.

In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like 
numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more. */

/*------------------------------
1. Comment Your JavaScript Code.
------------------------------*/

// One line comment.

/* Multiple 
lines 
comment */




/*-----------------------------
2. Declare JavaScript Variables
-------------------------------

In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types 
which are undefined, null, boolean, string, symbol, bigint, number, and object.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the 
data we want to refer to. Computer variables differ from mathematical variables in that they can store different values 
at different times. */




/*--------------------------------------------
3. Storing Values with the Assignment Operator
----------------------------------------------

In JavaScript, you can store a value in a variable with the assignment operator (=).

myVariable = 5; */





/*-----------------------------------------------
4. Assigning the Value of One Variable to Another
-------------------------------------------------

After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another 
variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar; */




/*----------------------------------------------------
5. Initializing Variables with the Assignment Operator
------------------------------------------------------

It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0; 

NOTE: Remember de difference between:
    - DECLARE (Basically create de variable without a value).
    - INITIALIZE (Assign a value to a declared variable).*/




/*=========================
6. Declare String Variables
===========================

Previously you used the following code to declare a variable:

var myName;
But you can also declare a string variable like this:

var myName = "your name";
"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in 
single or double quotes. */




/*======================================
7. Understanding Uninitialized Variables
========================================

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation 
on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an 
undefined variable, you will get a string of undefined.




/*============================================
8. Understanding Case Sensitivity in Variables
==============================================

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different 
casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and 
the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;




/*=====================================================
9. Explore Differences Between the var and let Keywords
=======================================================

One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable 
declarations:

var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. 
The console then displays the string David.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might 
accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for 
and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. */ 

let camper = "James";
let camper = "David";
/*The error can be seen in your browser console.*/




/*=====================================================
10. Declare a Read-Only Variable with the const Keyword
=======================================================

The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt 
to reassign a variable that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase 
for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later 
challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers. */




/*=================================
11. Add Two Numbers with JavaScript
===================================

Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example:

const myVar = 5 + 10;
myVar now has the value 15. */




/*==================================================
12. Subtract One Number from Another with JavaScript
====================================================

We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

const myVar = 12 - 6;
myVar would have the value 6. */




/*=====================================
13. ultiply Two Numbers with JavaScript
=======================================

We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

const myVar = 13 * 13;
myVar would have the value 169. */




/*==============================================
14. Divide One Number by Another with JavaScript
================================================

We can also divide one number by another.

JavaScript uses the / symbol for division.

Example

const myVar = 16 / 2;
myVar now has the value 8.

Change the 0 so that the quotient is equal to 2. */




/*====================================
15. Increment a Number with JavaScript
======================================

You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign.

Change the code to use the ++ operator on myVar. */




/*====================================
16. Decrement a Number with JavaScript
======================================

You can easily decrement or decrease a variable by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign. */





/*========================================
17. Create Decimal Numbers with JavaScript
==========================================

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

Note: computers represent numbers with finite precision. That's why floating-point operations cannot precisely represent true 
arithmetic operations, and this leads to many surprising situations. if you are facing one of these issues, open topic in the 
freeCodeCamp forum. */




/*=======================================
18. Multiply Two Decimals with JavaScript
=========================================

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers. */

const product = 3.4 * 9.1;
console.log(product);




/*===============================================
19. Divide One Decimal by Another with JavaScript
=================================================

Now let's divide one decimal by another. */

const quotient = 0.0 / 2.0;




/*===================================
20. Finding a Remainder in JavaScript
=====================================

The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, 
but does not work properly with negative numbers. */




/*=============================================
21. Compound Assignment With Augmented Addition
===============================================

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of 
the equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and 
assignment in one step.

One such operator is the += operator.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console. */




/*================================================
22. Compound Assignment With Augmented Subtraction
==================================================

Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5; */




/*===================================================
23. Compound Assignment With Augmented Multiplication
=====================================================

The *= operator multiplies a variable by a number.

myVar = myVar * 5;
will multiply myVar by 5. This can be rewritten as:

myVar *= 5; */




/*=============================================
24. Compound Assignment With Augmented Division
===============================================

The /= operator divides a variable by another number.

myVar = myVar / 5;
Will divide myVar by 5. This can be rewritten as:

myVar /= 5; */




/*====================================
25. Escaping Literal Quotes in Strings
======================================

When you are defining a string you must start and end with a single or double quote. What happens when you need a 
literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the 
quote.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. 
So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript". */




/*====================================
26. Quoting Strings with Single Quotes
======================================

String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of 
quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might 
happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving 
an <a> tag with various attributes in quotes, all within a string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of 
quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw 
an error.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing. */




/*=============================
27. Escape Sequences in Strings
===============================

Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

Note that the backslash itself must be escaped in order to display as a backslash. */

const myStr = "This is the first line \n\t\rThis is the second line."; // Change this line
console.log(myStr);




/*==========================================
28. Concatenating Strings with Plus Operator
============================================

In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. 
You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

const ourStr = "I come first. " + "I come second.";
The string I come first. I come second. would be displayed in the console. */




/*=====================================================
29. Concatenating Strings with the Plus Equals Operator
=======================================================

We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful 
to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr now has a value of the string I come first. I come second.. */




/*=====================================
30. Constructing Strings with Variables
=======================================

Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables 
into a string you're building.

Example:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?. */



/*================================
31. Appending Variables to Strings
==================================

Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using 
the plus equals (+=) operator.

Example:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

ourStr would have the value freeCodeCamp is awesome!. */




/*=============================
32. Find the Length of a String
===============================

You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length);
The value 10 would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.

For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the 
firstName.length property. */




/*==============================================================
33. Use Bracket Notation to Find the First Character in a String
================================================================

Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred 
to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of 
the first letter of the string by using firstName[0].

Example:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C. */




/*================================
34. Understand String Immutability
==================================

In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

let myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that 
myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change 
myStr would be to assign it with a new string, like this:

let myStr = "Bob";
myStr = "Job"; */




/*============================================================
35. Use Bracket Notation to Find the Nth Character in a String
==============================================================

You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
secondLetterOfFirstName would have a value of the string d.

Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck. */




/*=============================================================
36. Use Bracket Notation to Find the Last Character in a String
===============================================================

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string 
by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a. */




/*====================================================================
37. Use Bracket Notation to Find the Nth-to-Last Character in a String
======================================================================

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using 
firstName[firstName.length - 3]

Example:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string s. */




/*=============
38. Word Blanks
===============

You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing 
pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence has three missing pieces- an adjective, 
a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a 
variable as follows:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

-----------------------------------------------------------------------------------------------------------------------------   
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using 
words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, 
myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change 
the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. 
The result should be a complete sentence. */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb; // Change this line
// Only change code above this line




/*===============================================================
39. Store Multiple Values in one Variable using JavaScript Arrays
=================================================================

With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between 
each entry, like this:

const sandwich = ["peanut butter", "jelly", "bread"]; */




/*=====================================
40. Nest one Array within Another Array
=======================================

You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array. */




/*================================
41. Access Array Data with Indexes
==================================

We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, 
they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has 
an index of 0.


Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
The console.log(array[0]) prints 50, and data has the value 60. */




/*================================
42. Modify Array Data With Indexes
==================================

Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. 
Although JavaScript is able to process this correctly, this may confuse other programmers reading your code. */




/*==============================================
43. Access Multi-Dimensional Arrays With Indexes
================================================

One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, 
the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of 
brackets refers to the next level of entries inside.

Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

Note: There shouldn't be any spaces between the array name and the square brackets, 
like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, 
this may confuse other programmers reading your code. */




/*===============================
44. Manipulate Arrays With push()
=================================

An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]. */




/*==============================
45. Manipulate Arrays With pop()
================================

Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. 
In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4]. */




/*================================
46. Manipulate Arrays With shift()
==================================

pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]]. */




/*==================================
47. Manipulate Arrays With unshift()
====================================

Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array 
i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element 
at the beginning of the array.

Example:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
After the shift, ourArray would have the value ["J", "cat"]. After the unshift, 
ourArray would have the value ["Happy", "J", "cat"]. */




/*===============
48. Shopping List
=================

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number 
representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list. */

const myList = [
    ["Tomate", 15],
    ["Cebolla", 89],
    ["Locote", 20],
    ["Zanahoria", 7],
    ["Perjil", 3]
    ];




/*==========================================
49. Write Reusable JavaScript with Functions
============================================

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); 
Each time the function is called it will print out the message Hello World on the dev console. 
All of the code between the curly braces will be executed every time the function is called. */




/*============================================
50. Passing Values to Functions with Arguments
==============================================

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
When a function is defined, it is typically defined along with one or more parameters. The actual values that are input 
(or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. 
Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call 
testFun again with different arguments and the parameters would take on the value of the new arguments. */

function hello(param1, param2) {
    console.log(param1, param2);
}

var mundo = "world";

hello("Hello", mundo);




/*============================================
51. Return a Value from a Function with Return
==============================================

We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3. */




/*============================
52. Global Scope and Functions
==============================

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have 
Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. 
This can create unintended consequences elsewhere in your code or when running a function again. You should always declare 
your variables with let or const.

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords. */


// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  var oppsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2()




/*===========================
53. Local Scope and Functions
=============================

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are 
only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest 
  function) will throw an error, as loc is not defined outside of the function.

-----------------------------------------------------------------------------------------------------------------------
The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail. */

function myLocalScope() {
  // Only change code below this line
  let myVar = "10";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);




/*=====================================
54. Global vs. Local Scope in Functions
=======================================

It is possible to have both local and global variables with the same name. When you do this, the local variable takes 
precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present. */




/*========================================================
55. Understanding Undefined Value returned from a Function
==========================================================

A function can include the return statement but it does not have to. In the case that the function doesn't have a return 
statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value 
of the function is undefined. */

function sum(num) {
  num += 3;
  return num
}

console.log(sum(3))




/*==================================
56. Assignment with a Returned Value
====================================

If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal 
sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a 
variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

------------------------------------------------------------------------------------------------------------
Call the processArg function with an argument of 7 and assign its return value to the variable processed. */

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);




/*===============
57. Stand in Line
=================

In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));




/*==============================
58. Understanding Boolean Values
================================

Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off 
switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special 
meaning in JavaScript. */




/*==========================================
59. Use Conditional Logic with If Statements
============================================

if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces 
under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be 
true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition 
evaluates to false, the statement inside the curly braces will not execute.

Pseudocode 

if (condition is true) {
  statement is executed
}
Example */

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

console.log(test(true));
console.log(test(false));

/* test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. 
Since it is true, the function returns It was true. When we call test with a value of false, 
myCondition is not true and the statement in the curly braces is not executed and the function returns It was false. */




/*=======================================
60. Comparison with the Equality Operator
=========================================

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're 
equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the 
right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function 
will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types 
(for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. 
Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true */




/*==============================================
61. Comparison with the Strict Equality Operator
================================================

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts 
to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return 
false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type. */




/*=====================================
62. Practice comparing different values
=======================================

In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). 
Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, 
and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, 
without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because 
the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'

typeof 3 returns the string number, and typeof '3' returns the string string. */




/*=========================================
63. Comparison with the Inequality Operator
===========================================

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality 
would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values 
while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

-----------------------------------------------------------------------------------------------------------------------
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not 
equivalent to 99. */

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



/*================================================
64. Comparison with the Strict Inequality Operator
==================================================

The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true */




/*===========================================
65. Comparison with the Greater Than Operator
=============================================

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to 
the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false */




/*=======================================================
66. Comparison with the Greater Than Or Equal To Operator
=========================================================

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or 
equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false */




/*========================================
67. Comparison with the Less Than Operator
==========================================

The less than operator (<) compares the values of two numbers. 
If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. 
Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false */




/*====================================================
68. Comparison with the Less Than Or Equal To Operator
======================================================

The less than or equal to operator (<=) compares the values of two numbers. 
If the number to the left is less than or equal to the number to the right, it returns true. 
If the number on the left is greater than the number on the right, it returns false. Like the equality operator, 
the less than or equal to operator converts data types.

Examples

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false */




/*===========================================
69. Comparisons with the Logical And Operator
=============================================

Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No"; */ 




/*==========================================
70. Comparisons with the Logical Or Operator
============================================

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes"; */




/*=============================
71. Introducing Else Statements
===============================

When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
} */




/*================================
72. Introducing Else If Statements
==================================

If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
} */




/*=====================================
73. Logical Order in If Else Statements
=======================================

Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)

foo(0) will return the string Less than one, and bar(0) will return the string Less than two. */




/*=============================
74. Chaining If Else Statements
===============================

if/else statements can be chained together for complex logic. 
Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

------------------------------------------------------------------------
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge */

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }

  
  // Only change code above this line
}

testSize(7);




/*===========
75. Golf Code
=============

In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to 
sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, 
there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists 
the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience. */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  //return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);




/*====================================================
76. Selecting from Many Options with Switch Statements
======================================================

If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case 
statements which define various possible values. Statements are executed from the first matched case value until a break is 
encountered.

Here is an example of a switch statement:

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.

--------------------------------------------------------------------------------------
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta */

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);




/*==============================================
77. Adding a Default Option in Switch Statements
================================================

In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

--------------------------------------------------------------------
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff */

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);




/*=================================================
78. Multiple Identical Options in Switch Statements
===================================================

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. 
If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

----------------------------------------------------------------
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range. */

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);




/*======================================
79. Replacing If Else Chains with Switch
========================================

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

-------------------------------------------------------------------
Change the chained if/else if statements into a switch statement. */

/*
if (val === "bob") {
  answer = "Marley";
} else if (val === 42) {
  answer = "The Answer";
} else if (val === 1) {
  answer = "There is no #1";
} else if (val === 99) {
  answer = "Missed me by this much!";
} else if (val === 7) {
  answer = "Ate Nine";
} */

// Only change code below this line
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
}
// Only change code above this line
return answer;

chainToSwitch(7);




/*=========================================
80. Returning Boolean Values from Functions
===========================================

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

---------------------------------------------------------
Fix the function isLess to remove the if/else statements. */

function isLess(a, b) {
  // Only change code below this line

    return a < b;

  // Only change code above this line
}

isLess(10, 15);




/*====================================
81. Return Early Pattern for Functions
======================================

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, 
because the function exits at the return statement.

--------------------------------------------------------------------------------------------------------------------------
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string. */

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);




/*================
82. Counting Cards
==================

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the 
relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. 
When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement 
the global count variable according to the card's value (see table). The function will then return a string with the current count and 
the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) 
should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output. */

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0){
    return `${count} Hold`;
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');




/*==========================
83. Build JavaScript Objects
============================

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects 
through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. 
You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

------------------------------------------------------------------------------------------------------------------------
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, 
legs and tails are numbers, and friends is an array. */




/*==========================
84. Build JavaScript Objects
============================

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through 
what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. 
You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

-------------------------------------------------------------------------------------------------------------------------
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, 
and friends is an array. */

const myDog = {
  // Only change code below this line
  name: "Rayo",
  legs: 4,
  tails: 1,
  friends: ['','']

  // Only change code above this line
};




/*===============================================
85. Accessing Object Properties with Dot Notation
=================================================

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

Read in the property values of testObj using dot notation. 
Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt. */

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line




/*===================================================
86. Accessing Object Properties with Bracket Notation
=====================================================

The second way to access the properties of an object is bracket notation ([]). 
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, 
and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

-------------------------------------------------------------------------------------------
Read the values of the properties an entree and the drink of testObj using bracket notation 
and assign them to entreeValue and drinkValue respectively. */

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line




/*============================================
87. Accessing Object Properties with Variables
==============================================

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, 
not the name.

--------------------------------------------------------------------------------------------------------------------
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player. */

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line




/*============================
88. Updating Object Properties
==============================

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. 
You can use either dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to the string Happy Camper. 
Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; 
Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

-----------------------------------------------------------------------------------------
Update the myDog object's name property. Let's change her name from Coder to Happy Coder. 
You can use either dot or bracket notation. */

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";




/*===========================================
89. Add New Properties to a JavaScript Object
=============================================

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation. */

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof";




/*============================================
90. Delete Properties from a JavaScript Object
==============================================

We can also delete properties from objects like this:

delete ourDog.bark;
Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Delete the tails property from myDog. You may use either dot or bracket notation. */

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
console.log(myDog);
delete myDog["tails"];
console.log(myDog);




/*===========================
91. Using Objects for Lookups
=============================

Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. 
This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

---------------------------------------------------------
Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable. */

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");




/*================================
92. Testing Objects for Properties
==================================

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) 
method of objects to determine if that object has the given property name. 
.hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

------------------------------------------------------------------------------------------------------------------------
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found". */

function checkObj(obj, checkProp) {
  // Only change code below this line
  
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]; // Note: First I used dot notation and it doesn't work. REMEMBER, when you are using variables to access you must use bracket notation.
  } else {
    return "Not Found";
  }
  
  // Only change code above this line
}




/*=============================
93. anipulating Complex Objects
===============================

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. 
They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. 
It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. 
Objects hold data in a property, which has a key-value format. 
In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

---------------------------------------------------------------------------------------------------------------------------
Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings. */

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Pink Floyd",
    "title": "Dark Side Of The Moon",
    "release_year": 1973,
    "formats": ["Vinyl", "Cassette"]
  }
];
